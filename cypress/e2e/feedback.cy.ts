import FeedbackPage from "../page-objects/pages/FeedbackPage";

describe("Feedback Test", () => {
    before(function() {
        FeedbackPage.load();
    });

    it("Should submit feedback form", () => {
        FeedbackPage.submitFeedback();
    });
});