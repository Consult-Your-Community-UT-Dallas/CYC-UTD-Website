# Consult Your Community Website

Welcome to Consult Your Community, a student-led organization at UT Dallas dedicated to providing free consulting services to small, minority-owned businesses and nonprofits in the Dallas area. Our mission is to make a positive social impact by leveraging our skills and knowledge to support local communities.

## Technology Stack

- **Frontend:** Built with Next.js and Tailwind CSS. 
- **Backend:** Python FastAPI is responsible for handling form submissions and sending emails.

## Getting Started

Make sure you have the following software installed on your machine:

-   Node.js
-   Python

> [!NOTE]  
> Make sure you have a Python environment set up for this repository. You can use `virtualenv` or `conda` to create a new environment.

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/Consult-Your-Community-UT-Dallas/CYC-UTD-Website
   ```

2. Navigate to the project directory:
   ```
   cd Consult-Your-Community-UT-Dallas
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

The majority of the website's content can be found within the `/data` directory.

> [!NOTE]  
> Ask the project maintainers for API keys and other sensitive information. Look at the `.env.example` file for a list of environment variables that need to be set.

## Deployment

Since the repository is under a GitHub organization and Vercel's enterprise plan is too costly, one of the members of the organization must fork the repository and deploy it to Vercel using their Hobby plan.

Currently, the person responsible for deploying the website is [Giridhar Nair](https://github.com/GiridharRNair/CYC-UTD-Website/tree/main)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FConsult-Your-Community-UT-Dallas%2FCYC-UTD-Website&env=SENDGRID_API_KEY&envDescription=The%20SendGrid%20email%20service%20is%20used%20to%20send%20emails%20to%20the%20organization%20from%20the%20contact%20form.%20Ask%20the%20project%20maintainers%20for%20API%20keys%20and%20other%20sensitive%20information.&project-name=cycutdwebsite&repository-name=CYC-UTD-Website)
