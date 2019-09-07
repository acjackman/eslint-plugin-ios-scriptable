/**
 * @fileoverview iOS Scriptable globals
 * @author Adam Jackman
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
module.exports = {
  environments: {
    globals: {
      globals: {
        Alert: false,
        args: false,
        Calendar: false,
        CalendarEvent: false,
        CallbackURL: false,
        Color: false,
        config: false,
        console: false,
        Contact: false,
        ContactsContainer: false,
        ContactsGroup: false,
        Data: false,
        DatePicker: false,
        Device: false,
        Dictation: false,
        DocumentPicker: false,
        DrawContext: false,
        FileManager: false,
        Image: false,
        importModule: false,
        Keychain: false,
        Location: false,
        Mail: false,
        Message: false,
        module: false,
        Notification: false,
        Pasteboard: false,
        Path: false,
        Photos: false,
        Point: false,
        QuickLook: false,
        Rect: false,
        RecurrenceRule: false,
        Reminder: false,
        Request: false,
        Safari: false,
        Script: false,
        ShareSheet: false,
        Size: false,
        Speech: false,
        UITable: false,
        UITableCell: false,
        UITableRow: false,
        URLScheme: false,
        UUID: false,
        WebView: false,
        XMLParser: false,
      },
    },
  },
}
