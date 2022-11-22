# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. Create an endpoint for fetching info about the agents related to Facility
   Details:
   As we already have `getShiftsByFacility` function that returns info about the Agents, we can easily create the list of agents, where each agent must be unique (no duplicated items)

   Response format:
   [
   {
   id: 1,
   name: 'John',
   specialization: 'Engineer',
   },
   ....
   {
   id: 56,
   name: 'Steve',
   specialization: 'UI/UX Designer',
   },
   ]

   Estimated time: 2 hours

2. Create an endpoint for adding custom ids for the agents
   Details:
   The endpoint should recieve the list of the selected agents ids with new custom ids. Add new field 'custom_id' into the DB if needed (let's assume it's numeric).

   Request format:
   [
   {
   id: 1,
   custom_id: 400
   }
   ]

   Estimated time: 2 hours

3. Build an interface for displaying and updating agents data, integrate with endpoints
   Details:

   - I propose to create an input with a button where the user can enter the Facility.
   - Right below the input, the scrollable list with agents' names should be displayed. The data must be fetched using (1) endpoint. If the search doesn't return any agents show some message instead.
   - Each item in the list should be selectable.
   - When the user selects the agent, the details about him should be displayed on the right from the list.
   - Under the details on the right, the custom id input must be added. It must accept only numeric values and it can be empty.
   - If the user adds a custom id for the agent, a checkmark should appear in the list item on the left.
   - Add submit button below the list and the details.
   - On submission, the request should be sent using the (2) endpoint.
     Estimated time: 2 hours (simple styling and without tests). With tests: 3.5-4 hours.

4. `generateReport` changes
   Details:
   The function must use `custom_id` for the agent instead of `id` if it's set

   Estimated time: 1 hour
