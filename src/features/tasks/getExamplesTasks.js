export const getExampleTasks = async () => {
    const response = await fetcch("/To-Do-List-React/exampleTasks.json");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};