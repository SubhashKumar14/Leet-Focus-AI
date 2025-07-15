# Chrome Web Store Publishing Guide

This guide will walk you through the process of publishing your LeetCode Focus extension to the Chrome Web Store.

## Prerequisites

1. **Google Developer Account**: You'll need a Google account and pay a one-time $5 registration fee
2. **Extension Ready**: Your extension should be fully tested and working
3. **Store Assets**: Icons, screenshots, and promotional images ready

## Step 1: Prepare Your Extension

### 1.1 Update Manifest

Ensure your `manifest.json` is production-ready:

```json
{
  "manifest_version": 3,
  "name": "LeetCode Focus - AI Assistant & Focus Mode",
  "version": "1.0.0",
  "description": "Enhance your LeetCode experience with AI hints, code improvements, and focus mode to minimize distractions.",
  "permissions": ["activeTab", "storage", "scripting"],
  "host_permissions": ["https://leetcode.com/*", "https://*.leetcode.com/*"],
  "background": {
    "service_worker": "src/background.js"
  },
  "content_scripts": [
    {
      "matches": ["https://leetcode.com/*", "https://*.leetcode.com/*"],
      "js": ["src/content.js"],
      "css": ["src/content.css"],
      "run_at": "document_end"
    }
  ],
  "action": {
    "default_popup": "src/popup.html",
    "default_title": "LeetCode Focus"
  },
  "icons": {
    "16": "icons/icon-16.png",
    "32": "icons/icon-32.png",
    "48": "icons/icon-48.png",
    "128": "icons/icon-128.png"
  }
}
```

### 1.2 Create Required Icons

You need icons in these sizes:

- 16x16 pixels (toolbar icon)
- 32x32 pixels (Windows computers often require this size)
- 48x48 pixels (extension management page)
- 128x128 pixels (Chrome Web Store and installation)

### 1.3 Test Thoroughly

- Test on different LeetCode pages
- Verify all features work correctly
- Check for console errors
- Test on different screen sizes

## Step 2: Create Store Assets

### 2.1 Store Icon

- Size: 128x128 pixels
- Format: PNG or JPEG
- Should clearly represent your extension

### 2.2 Screenshots

- At least 1 screenshot required (up to 5 recommended)
- Size: 1280x800 or 640x400 pixels
- Show your extension in action on LeetCode
- Highlight key features

### 2.3 Promotional Images (Optional but Recommended)

- Small tile: 440x280 pixels
- Large tile: 920x680 pixels
- Marquee: 1400x560 pixels

### 2.4 Store Description

Write compelling copy that includes:

- Clear value proposition
- Key features and benefits
- How to use the extension
- Any limitations or requirements

## Step 3: Register for Chrome Web Store Developer Account

1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
2. Sign in with your Google account
3. Pay the $5 registration fee
4. Accept the terms of service

## Step 4: Upload Your Extension

### 4.1 Create Extension Package

1. Remove any development files (`*.md`, `node_modules`, etc.)
2. Zip your extension folder
3. Ensure the zip contains your manifest.json at the root level

### 4.2 Upload to Store

1. Click "Add new item" in the developer dashboard
2. Upload your zip file
3. Fill out the store listing information

### 4.3 Store Listing Information

**Basic Information:**

- Extension name: "LeetCode Focus - AI Assistant & Focus Mode"
- Summary: Brief description (132 characters max)
- Category: Productivity
- Language: English (or your preferred language)

**Detailed Description:**

```
Enhance your LeetCode problem-solving experience with AI-powered assistance and focus mode.

🚀 KEY FEATURES:
• AI-Powered Hints: Get intelligent suggestions without spoiling solutions
• Focus Mode: Minimize distractions with a clean interface overlay
• Code Analysis: Real-time feedback on your code efficiency
• Progress Tracking: Monitor your improvement over time
• Smart Recommendations: Personalized suggestions based on your practice

🎯 PERFECT FOR:
• Coding interview preparation
• Daily programming practice
• Learning data structures and algorithms
• Improving problem-solving skills

⚡ HOW IT WORKS:
1. Install the extension
2. Visit any LeetCode problem page
3. Click the extension icon to enable features
4. Get AI hints, enable focus mode, and track progress

🔒 PRIVACY & SECURITY:
• Works entirely locally in your browser
• No data collection or external transmission
• Only requires permissions for LeetCode domains

Transform your coding practice with intelligent assistance that helps you learn faster while maintaining the challenge of problem-solving.
```

**Screenshots:**

- Upload your prepared screenshots
- Add captions describing what each screenshot shows

**Privacy:**

- Single purpose: Enhance LeetCode coding experience
- Data usage: Explain any data the extension accesses
- Permissions justification: Explain why each permission is needed

## Step 5: Set Privacy and Permissions

### 5.1 Privacy Policy (Optional but Recommended)

If your extension collects any data, you'll need a privacy policy. Since this extension works locally, you can create a simple policy stating:

```
Privacy Policy for LeetCode Focus Extension

Data Collection: This extension does not collect, store, or transmit any personal data.

Local Storage: The extension may store user preferences locally in your browser for functionality purposes. This data never leaves your device.

Permissions: The extension only requests permissions necessary for its functionality on LeetCode domains.

Contact: For questions about this privacy policy, contact [your email].
```

### 5.2 Permissions Justification

For each permission, explain why it's needed:

- `activeTab`: To interact with the current LeetCode page
- `storage`: To save user preferences and settings locally
- `scripting`: To inject helpful features into LeetCode pages

## Step 6: Review and Publish

### 6.1 Review Checklist

- [ ] All store assets uploaded
- [ ] Description is clear and compelling
- [ ] Screenshots show key features
- [ ] Permissions are justified
- [ ] Privacy policy (if needed) is linked
- [ ] Extension has been thoroughly tested

### 6.2 Submit for Review

1. Click "Submit for Review"
2. Chrome will review your extension (usually takes 1-7 days)
3. You'll receive an email when the review is complete

### 6.3 After Approval

- Your extension will be live on the Chrome Web Store
- Users can install it with one click
- You can track installs and ratings in the developer dashboard

## Step 7: Post-Launch

### 7.1 Update Your Website

Once approved, update your website to link directly to the Chrome Web Store:

```typescript
<Button size="lg" className="w-full" asChild>
  <a
    href="https://chrome.google.com/webstore/detail/your-extension-id"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Chrome className="h-4 w-4 mr-2" />
    Add to Chrome
  </a>
</Button>
```

### 7.2 Monitor and Maintain

- Respond to user reviews
- Monitor usage analytics
- Push updates as needed
- Keep your extension compatible with Chrome updates

## Common Issues and Solutions

### Issue: Extension Rejected

**Solution:** Carefully read the rejection email and address all mentioned issues. Common reasons include:

- Misleading descriptions
- Excessive permissions
- Broken functionality
- Policy violations

### Issue: Low Installation Rate

**Solution:**

- Improve your store listing with better screenshots and description
- Add more detailed feature explanations
- Respond to user reviews promptly
- Consider promotional activities

### Issue: Negative Reviews

**Solution:**

- Respond professionally to reviews
- Fix reported bugs quickly
- Add requested features if feasible
- Maintain regular updates

## Resources

- [Chrome Web Store Developer Documentation](https://developer.chrome.com/docs/webstore/)
- [Extension Manifest V3 Guide](https://developer.chrome.com/docs/extensions/mv3/)
- [Chrome Web Store Policies](https://developer.chrome.com/docs/webstore/program-policies/)
- [Extension Publishing Best Practices](https://developer.chrome.com/docs/webstore/best-practices/)

## Estimated Timeline

- Preparation: 1-3 days
- Store listing creation: 1-2 days
- Review process: 1-7 days
- Total: 3-12 days

## Cost Breakdown

- Google Developer registration: $5 (one-time)
- Domain for privacy policy (optional): $10-15/year
- Total minimum cost: $5

With this guide, you should be able to successfully publish your LeetCode Focus extension to the Chrome Web Store and reach users worldwide!
