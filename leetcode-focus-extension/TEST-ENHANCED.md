# 🧪 Enhanced Extension Testing Guide

## 🔄 Step 1: Reload Extension

1. **Go to Chrome Extensions**: `chrome://extensions/`
2. **Find "LeetCode Focus"**
3. **Click the Reload Button** 🔄

## 🎯 Step 2: Test Enhanced Focus Mode

### Test Solutions Tab Removal:

1. **Go to LeetCode**: https://leetcode.com/problems/two-sum/
2. **Verify Solutions tab exists** (you should see it initially)
3. **Open Extension** → **Focus Mode tab**
4. **Check "Hide Solutions Tab"** → **Click "Apply Focus Settings"**
5. **Expected Result**: Solutions tab should **completely disappear** from the page
6. **Uncheck "Hide Solutions Tab"** → **Click "Apply Focus Settings"**
7. **Expected Result**: Solutions tab should **reappear** in its original position

### Test All Focus Options:

1. **Enable all focus options**:

   - ☑️ Hide Solutions Tab
   - ☑️ Hide Hints
   - ☑️ Hide Difficulty Level
   - ☑️ Hide Problem Tags
   - ☑️ Enable Dark Mode

2. **Click "Apply Focus Settings"**
3. **Expected Results**:

   - 🎯 "Focus Mode Active" indicator appears
   - Solutions tab disappears
   - Hints section disappears
   - Difficulty indicator (Easy/Medium/Hard) disappears
   - Topic tags disappear
   - Dark mode activates

4. **Disable all options** → **Apply Settings**
5. **Expected Results**:
   - ✅ "Restored X elements" message appears
   - All elements return to their original positions
   - Dark mode deactivates

## 🤖 Step 3: Test Enhanced Code Extraction

### Write Some Code:

1. **Go to a LeetCode problem**
2. **Write code in the editor**:
   ```javascript
   function twoSum(nums, target) {
     const map = new Map();
     for (let i = 0; i < nums.length; i++) {
       const complement = target - nums[i];
       if (map.has(complement)) {
         return [map.get(complement), i];
       }
       map.set(nums[i], i);
     }
     return [];
   }
   ```

### Test AI Features:

1. **Open Extension** → **AI Assistant tab**
2. **Click "Get Hint"**
   - Should extract your code and send to Gemini API
   - Should provide AI-powered hint
3. **Click "Improve Code"**
   - Should analyze your code
   - Should provide optimization suggestions

## 🔍 Debug Information

### Check Browser Console (F12):

**Expected Logs for Code Extraction:**

```
LeetCode Focus content script loaded
Extracting code and problem data...
Problem title found: Two Sum
Found Monaco element: .monaco-editor .view-lines
Code extracted from Monaco instance: function twoSum...
```

**Expected Logs for Focus Mode:**

```
Applying focus rules with settings: {hideSolutions: true, ...}
Removing Solutions elements...
Marked Solutions element for removal: <div class="flexlayout__tab_button">
Focus mode applied: removed 5 elements
```

**Expected Logs for API Calls:**

```
Making API call to Gemini API...
Sending request to Gemini API...
API Response status: 200 OK
API Response received successfully
```

## 🐛 Troubleshooting

### Code Not Extracted:

- ✅ Make sure you're on a LeetCode problem page
- ✅ Write some code in the Monaco editor
- ✅ Check console for "Code extracted from Monaco instance"
- ✅ Try clicking in the editor area first

### Focus Mode Not Working:

- ✅ Check console for "Removing Solutions elements"
- ✅ Look for "Focus mode applied: removed X elements"
- ✅ Verify you're on a LeetCode problem page (not the problems list)

### API Not Working:

- ✅ Check console for API call logs
- ✅ Look for 200 OK status or error messages
- ✅ Verify internet connection

## ✅ Success Criteria

### Code Extraction Working:

- [x] Console shows "Code extracted from Monaco instance"
- [x] AI features receive actual user code
- [x] Hints and improvements are relevant to your code

### Focus Mode Working:

- [x] Elements completely disappear (not just hidden)
- [x] "Focus Mode Active" indicator shows
- [x] Elements restore when focus mode disabled
- [x] "Restored X elements" message appears

### API Integration Working:

- [x] Console shows "API Response received successfully"
- [x] AI responses are relevant and helpful
- [x] Fallback content works when API fails

## 🎯 The extension should now be fully functional with:

- **💯 Complete element removal** (not just hiding)
- **🔄 Perfect restoration** when focus mode disabled
- **🤖 Enhanced code extraction** from Monaco editor
- **⚡ Real-time AI assistance** with proper error handling
- **🎨 Beautiful user feedback** with animations and indicators

Try all features and verify they work as expected! 🚀
