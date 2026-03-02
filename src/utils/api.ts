/**
 * API Utility for OAU Foundation
 * Centralizes all backend communication logic.
 */

// Auto-detect production environment
const BASE_URL = "https://xnetnigeria.com/backend";

/**
 * Generic function to send email data to the backend
 * @param endpoint The API endpoint (e.g., 'contact', 'newsletter')
 * @param data The form data object
 */
export const sendEmail = async (endpoint: string, data: any) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || "Failed to send message");
        }

        return { success: true, message: result.message };
    } catch (error: any) {
        console.error(`[API Error] ${endpoint}:`, error);
        return { success: false, message: error.message || "An unexpected error occurred" };
    }
};

/**
 * Check server status
 */
export const checkServerStatus = async () => {
    try {
        const response = await fetch(`${BASE_URL}/status`);
        return response.ok;
    } catch {
        return false;
    }
};
