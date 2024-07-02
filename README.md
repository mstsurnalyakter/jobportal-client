# Job Portal

**Live Site URL:** [Job Portal](https://job-portal-f2a64.web.app)

- **Server Site Repository:** [Server](https://github.com/mstsurnalyakter/jobportal-server)

## Project Concept & Overview:

Job Portal is a job-seeking website where users can post job listings, search for positions, and apply seamlessly.

## Features:

- **User Authentication:** Create an account, log in, and manage your profile to save favorite job listings and track application statuses.
- **Advanced Filters:** The user can filter jobs by category name.
- **Advanced search:**  The user can search for a job by Job Title.
- **Resume Submit:** The user can submit a resume link
- **Post Job:** The user can post a job
- **Applied Job Summary download:** User can download their applied job list in a PDF format
- **Remote Job Listings:** Filter job listings specifically for remote positions, enabling job seekers to find opportunities that offer flexible work arrangements and remote-friendly cultures.
- **Part-Time Job Listings:** Discover part-time job opportunities for individuals seeking supplemental income, flexible schedules, or work-life balance.


## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB
- npm or yarn

### Installation

1. Client side repository:

    a. Clone
    ```sh
    git clone https://github.com/mstsurnalyakter/jobportal-client
    cd jobportal-client
    ```

    b. Install client dependencies:

    ```sh
    npm install
    ```


### Configuration

Create a .env file in the client directory with the following environment variables:

```env
  VITE_APIKEY=
  VITE_AUTHDOMAIN=
  VITE_PROJECTID=
  VITE_STORAGEBUCKET=
  VITE_MESSAGINGSENDERID=
  VITE_APPID=
  VITE_API_URL=

### Run the client:

     ```sh
    npm run dev
    ```
