# Nigiri Template 🍣

[Demo](https://nigiri.vercel.app/)
[Screenshots](https://imgur.com/a/hpx1zx2)

<div align="center">
  <br/>
    <img src="https://i.imgur.com/HrYMHGK.png" width="1000"/>
  <br/>
</div>

<!-- toc -->

- [Template Documentation](#template-documentation)
  - [Introduction](#introduction)
  - [Configuration Options (type, default)](#configuration-options-type-default)
    - [1. Site Information](#1-site-information)
    - [2. Profile](#2-profile)
    - [3. About](#3-about)
    - [3. Social Media](#3-social-media)
    - [4. Email Address](#4-email-address)
    - [5. Buy Me a Coffee](#5-buy-me-a-coffee)
    - [7. Other (UI)](#7-other-ui)
  - [Example Configuration](#example-configuration)
- [Getting Started Locally](#getting-started-locally)

<!-- tocstop -->

# Template Documentation

## Introduction

The Nigiri template allows you to create a personalized blog with ease. The configuration of the blog is managed through a YAML file named `configuration.yaml` located in the main directory. This documentation provides details on the available configuration options and their usage.

## Configuration Options (type, default)

### 1. Site Information

- `site_title`: (string) Website title. Defaults to the user's name if not specified.
- `site_description`: (string) Website meta description.

### 2. Profile

- `name`: (string) Your name.
- `surname`: (string) Your surname or username.
- `professional_identity`: (string) Your professional identity or position, which will be displayed under your name.
- `profile_picture`: (string) Path to your profile picture. If you provide a profile picture, the avatar will be generated using the first letter of your name. If no name is provided, a "user" icon will be displayed at the center of the avatar.

### 3. About

You can add here as many paragraphs as you want. For example:

- `about_me_paragraph`: (string) Paragraph about your yourself.
- `work_paragraph`: (string) Paragraph about your work.

Keys will be used as headings, for example `about_me_paragraph` will become `About Me`.

### 3. Social Media

Provide your usernames for various social media platforms.
Icons are pre-downloaded for all platform below.

- `github_username`: (string) GitHub username.
  `github_icon`: /platforms/github.svg

- `linkedin_username`: (string) LinkedIn username.
  `linkedin_icon`: /platforms/linkedin.svg

- `instagram_username`: (string) Instagram username.
  `instagram_icon`: /platforms/instagram.svg

- `tumblr_username`: (string) Tumblr username.
  `tumblr_icon`: /platforms/tumblr.svg

- `steam_username`: (string) Steam username.
  `steam_icon`: /platforms/steam.svg

- `twitter_username`: (string) Twitter username.
  `twitter_icon`: /platforms/twitter.svg

You can add more platforms, simply:

1. Put desired icon in `public/platforms` folder.
2. Add your platform and username to the `configuration.yaml` like so:

```
  "platformName_username": "john_doe",
  "platformName_icon": "platformIcon.svg"
```

No need to worry if you don't have a specific icon; a generic one will be used in that case.

### 4. Email Address

- `email_address`: (string) The email address you provide here will be shown as an icon right after your socials.

### 5. Buy Me a Coffee

Add a "Buy Me a Coffee" button that will be displayed in the header.

- `buyMeACoffee_username`: (string) Your "Buy Me a Coffee" username. This will be displayed as an icon preceding the Theme Toggler.

### 7. Other (UI)

Configure the visual appearance of the blog & more

- `profile_picture_border`: (boolean, true) Light/Dark border for profile picture and avatar.
- `max_posts_per_page`: (int, 8) Limits posts on the "blog" page.
- `disable_about_me_page`: (boolean, false) Disables "about" page. Therefore no links will be generated in the header.
- `disable_animated_underline`: (boolean, false) Disables animated underline and replace it with a static underline on-hover.
- `blog_preview_date_format`: (string, ISO_8601) Blog list item date format. Options: `ISO_8601` (2023-12-15) and `full_date` (December 15, 2023).
- `blog_preview_date_separators`: (string, "-") Blog list item date separator. Works only for ISO_8601 date format. Defaults to "-" (2023-12-15).

## Example Configuration

```yaml
# configuration.yml
site_title: 'Nigiri'
site_description: 'Demo version of Nigiri Next.js Template'

name: 'John'
surname: 'Doe'
professional_identity: 'Proffessional Magician'
profile_picture: '/profile_picture/john_doe.jpg'
about_me_paragraph: |

  In eget imperdiet orci, convallis feugiat diam. Nam nec turpis tincidunt, diam ac, efficitur velit. In congue velit a nisi finibus, eget pulvinar lectus cursus. Duis risus ligula, eleifend rutrum velit ut, varius varius mauris.

twitter_username: 'john_doe'

email_address: 'john_doe@gmail.com'
buyMeACoffee_username: 'john_doe'
blog_preview_date_separators: '-'
max_posts_per_page: '15'
```

Feel free to customize the configuration to suit your preferences and style.

# Getting Started Locally

```bash
  $ cd nigiri
  $ npm i
  $ npm run dev
```
