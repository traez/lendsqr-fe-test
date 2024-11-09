import { render, act, waitFor, RenderResult } from "@testing-library/react";
import StateProvider, {
  StateContext,
  StateContextType,
} from "@/lib/StateProvider";
import { useContext } from "react";

/* 
These tests collectively cover positive and negative cases for fetching data, storing data in local storage, and rendering data from local storage, ensuring the component behaves correctly under different conditions.
*/

// Mock the fetch function
global.fetch = jest.fn() as jest.Mock;

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, "localStorage", { value: localStorageMock });

// Helper component to access context values
const TestComponent = () => {
  const context = useContext(StateContext);
  return <div data-testid="test-component">{JSON.stringify(context)}</div>;
};

// Define a test suite for `StateProvider`. Use `beforeEach` to clear any previous 
// mocks before each test to avoid cross-test interference.
describe("StateProvider", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("fetches and stores data successfully when API responds correctly", async () => {
    // Arrange
    const mockData = {
      arrayCard: [
        {
          Summary: {
            key: "test-key",
          },
          "Personal Information": {
            "EMAIL ADDRESS": "testuser@example.com",
          },
        },
      ],
    };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    // Act
    let component: RenderResult;
    await act(async () => {
      component = render(
        <StateProvider>
          <TestComponent />
        </StateProvider>
      );
    });

    // Assert
    await waitFor(() => {
      const contextValue = JSON.parse(
        component!.getByTestId("test-component").textContent || "{}"
      ) as StateContextType;
      expect(contextValue.userData).toEqual(mockData.arrayCard);
      expect(contextValue.isLoading).toBe(false);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        "userData",
        JSON.stringify(mockData.arrayCard)
      );
    });
  });

  test("handles API error correctly", async () => {
    // Arrange
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error("API Error"));

    // Act
    let component: RenderResult;
    await act(async () => {
      component = render(
        <StateProvider>
          <TestComponent />
        </StateProvider>
      );
    });

    // Assert
    await waitFor(() => {
      const contextValue = JSON.parse(
        component!.getByTestId("test-component").textContent || "{}"
      ) as StateContextType;
      expect(contextValue.userData).toBeNull();
      expect(contextValue.isLoading).toBe(false);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "Error fetching user data:",
        expect.any(Error)
      );
    });

    consoleErrorSpy.mockRestore();
  });

  test("uses localStorage data if available", async () => {
    // Arrange
    const mockStoredData = {
      arrayCard: [
        {
          Summary: {
            key: "test-key",
          },
          "Personal Information": {
            "EMAIL ADDRESS": "testuser@example.com",
          },
        },
      ],
    };
    localStorageMock.getItem.mockReturnValueOnce(
      JSON.stringify(mockStoredData)
    );

    // Act
    let component: RenderResult;
    await act(async () => {
      component = render(
        <StateProvider>
          <TestComponent />
        </StateProvider>
      );
    });

    // Assert
    await waitFor(() => {
      const contextValue = JSON.parse(
        component!.getByTestId("test-component").textContent || "{}"
      ) as StateContextType;
      expect(contextValue.userData).toEqual(mockStoredData);
      expect(contextValue.isLoading).toBe(false);
      expect(global.fetch).not.toHaveBeenCalled();
    });
  });
});

/* 
This code is a Jest test suite for a StateProvider component that manages fetching and storing user data. It uses React Context (StateContext) to share state across components. The tests simulate different scenarios for fetching and managing this state.

Mocking External Dependencies: The test suite begins by mocking the fetch function and localStorage. This ensures that any API calls made during the tests are controlled and predictable, and also allows testing the component's behavior when it interacts with localStorage.

Test Components and Context: A TestComponent is used within the StateProvider to access the state from StateContext. It renders the context value, allowing the tests to validate the state provided by StateProvider.

Test 1: "fetches and stores data successfully":
This test simulates a successful API call (using fetch), where a mock response containing mockData is returned.
The component is rendered, and the test waits for the context value to be updated with mockData.
It then asserts that the data (userData) in the context matches mockData, isLoading is set to false, and that localStorage.setItem was called to store the fetched data.

Test 2: "handles API error correctly":
This test simulates an error in the API call using mockRejectedValueOnce, causing fetch to throw an error.
The component is rendered, and the context value should indicate no data (userData is null) and isLoading should be false.
Additionally, the test checks that console.error was called with the expected error message, indicating that the error handling logic works as intended.

Test 3: "uses localStorage data if available":
This test checks if the StateProvider uses data from localStorage when available. It mocks a return value for localStorage.getItem with mockStoredData.
When the component is rendered, it ensures that the context is populated with this data, and no API call (fetch) is made.

In summary, the tests verify that the StateProvider correctly handles data fetching, error handling, and using cached data from localStorage. They mock external dependencies to simulate various conditions (successful API call, failed API call, and localStorage usage), and assert that the component's state behaves as expected under each scenario.
*/

