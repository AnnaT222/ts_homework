function mockApi(): Promise<{ id: number, name: string }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "John Doe" });
        }, 1000); 
    });
}

async function fetchData() {
    try {
        console.log("Fetching data...");
        const data = await mockApi();
        console.log("Data received:", data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
}

fetchData()
    .then((data) => {
        console.log("Data processed successfully:", data);
    })
    .catch((error) => {
        console.error("Failed to process data:", error);
    });