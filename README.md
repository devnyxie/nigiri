# Next.js Blog Template Documentation

## Introduction

The Next.js Blog template allows you to create a personalized blog with ease. The configuration of the blog is managed through a YAML file named `configuration.yaml` located in the main directory. This documentation provides details on the available configuration options and their usage.

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

- `about_me_paragraph`: (string) Paragraph about yourself.
- `work_paragraph`: (string) Paragraph about your work.

  You can add more paragraphs, simply add:

```
  "sectionName_paragraph": "text"
```

### 3. Social Media

Provide your usernames for various social media platforms to display links in the blog.

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
2. Add your platform to the `configuration.yaml`:

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

### 7. Other

Configure the visual appearance of the blog & more

- `profile_picture_border`: (boolean, true) Light/Dark border for profile picture and avatar.
- `max_posts_per_page`: (int, 8) Limits posts on the "blog" page.
- `disable_about_me_page`: (boolean, false) Disable "about" page. Therefore no links will be generated in the header.
  todo - `disable_animated_underline`: (boolean, false) Disable animated underline and replace it with a static underline.
- `blog_preview_date_format`: (string, ISO_8601) Blog list item date format. Options: `ISO_8601` (2023-12-15) and `full_date` (December 15, 2023).
- `blog_preview_date_separators`: (string, "-") Blog list item date separator. Defaults to "-" (2023-12-15).

## Example Configuration

```yaml
{
  'site_title': 'My Blog',
  'name': 'John',
  'surname': 'Doe',
  'professional_identity': 'Web Developer',
  'github_username': 'johndoe',
  'linkedIn_username': 'john-doe',
  'instagram_username': 'john_doe_insta',
  'tumblr_username': 'john-doe-tumblr',
  'steam_username': 'john_doe_steam',
  'twitter_username': 'johndoe_twitter',
  'email_address': 'john.doe@example.com',
  'buyMeACoffee_username': 'john_doe_coffee',
  'about_me_paragraph': "I'm a passionate web developer...",
  'work_paragraph': 'Currently working on exciting projects...',
  'disable_animated_underline': false,
  'blog_preview_date_format': 'full_date',
}
```

Feel free to customize the configuration to suit your preferences and style.
