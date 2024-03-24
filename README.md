# Consult Your Community Website

Welcome to the Consult Your Community website, a student-led organization at UT Dallas dedicated to providing free consulting services to small, minority-owned businesses, and nonprofits in the Dallas area. Our mission is to make a positive social impact by leveraging our skills and knowledge to support local communities.

## Technology Stack

- **Frontend:** Built with Next.js and styled using Tailwind CSS.
- **Backend:** Python FastAPI handles form submissions and manages email communication.

## Getting Started

To begin, ensure you have the following software installed on your machine:

- Node.js
- Python

> [!NOTE]
> Set up a Python environment for this repository using `virtualenv` or `conda`.

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/Consult-Your-Community-UT-Dallas/CYC-UTD-Website
   ```

2. Navigate to the project directory:
   ```
   cd CYC-UTD-Website
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

Most of the website's content resides within the `/data` directory.

> [!NOTE]
> Contact project maintainers for API keys and other sensitive information. Refer to the `.env.example` file for required environment variables.

To modify organization members, edit the `Consultants.js` and `Executives.js` files in the `/data` directory. Add their profile pictures in the `/public/Team` directory following the naming convention `FirstnameLastname.jpeg`.

## Deployment

As the repository is under a GitHub organization and Vercel's enterprise plan is costly, a member must fork the repository and deploy it to Vercel using their Hobby plan.

Currently, deployment responsibility lies with [Giridhar Nair](https://github.com/GiridharRNair/CYC-UTD-Website/tree/main).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FConsult-Your-Community-UT-Dallas%2FCYC-UTD-Website&env=SENDGRID_API_KEY&envDescription=The%20SendGrid%20email%20service%20is%20used%20to%20send%20emails%20to%20the%20organization%20from%20the%20contact%20form.%20Ask%20the%20project%20maintainers%20for%20API%20keys%20and%20other%20sensitive%20information.&project-name=cycutdwebsite&repository-name=CYC-UTD-Website)
