// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice

var cepContent = {
    firstName: 'Tom',
    lastName: 'Harris',
    jobTitle: 'Sr. Analyst, Scripting & Automation',
    homeOffice: 'Austin Downtown',
    tellMeMore: 'I\'m a curious and learning-obsessed Florida transplant who\'s called Austin home for nearly ten years now. I\'ve been fortunate enough to be at HomeAway for over six of those years, initially hired as a nontechnical SEO analyst. Since then, I\'ve consistently taken on more analytical and technical responsibilities. I\'ve discovered I learn best when there\'s an application for my studies, so the CEP seems like an ideal opportunity to continue to grow with something real at stake to help drive me.',
}


// using jQuery and the object above, display the information as the appropriate button is clicked
$(document).ready(function() {
    $('.fname-button').click(function() {
        $('#fname-text').text(cepContent.firstName);
    });
    $('.lname-button').click(function() {
        $('#lname-text').text(cepContent.lastName);
    });
    $('.job-button').click(function() {
        $('#job-text').text(cepContent.jobTitle);
    });
    $('.office-button').click(function() {
        $('#office-text').text(cepContent.homeOffice);
    });
    $('.tell-me-button').click(function() {
        $('#tell-me-text').text(cepContent.tellMeMore);
    });
});
