## ReactJS Form for Collecting Time Information

Facebook Messenger does not provide good options for selecting time. Entering time information via text is slow, error prone and clunky, and also requires a lot of validation. A better way would be to use a time picker interface similar to time pickers in Android and iOS native.

The intended use case of this form is for a user to open this page as a webview to select time. After time selection, the page will make a HTTP request to your endpoint of choice to update the state of the user. This ought to then be followed up with some validation message to the user.

Credits to [ecmadao](https://github.com/ecmadao/react-times) for doing the heavy lifting of making the best time picking component I could find.

