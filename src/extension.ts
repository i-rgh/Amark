import * as vscode from "vscode";

import { BookmarkTreeProvider } from "./provider/BookmarkTreeProvider";

export function activate(context: vscode.ExtensionContext) {
  const bookmarkTree = new BookmarkTreeProvider();

  context.subscriptions.push(
    ...[
      vscode.window.registerTreeDataProvider("qmark", bookmarkTree),
      vscode.commands.registerCommand("qmark.refreshEntry", () => {}),
      vscode.commands.registerCommand("qmark.addItem", (args) => {}),
      vscode.commands.registerCommand("qmark.removeItem", (args) => {}),
      vscode.commands.registerCommand("qmark.removeAllItems", () => {}),

      vscode.commands.registerCommand("qmark.openFile", (file) => {
        vscode.commands.executeCommand(
          "vscode.open",
          vscode.Uri.parse(file.resourceUri.path)
        );
      }),
    ]
  );
}

export function deactivate() {}
