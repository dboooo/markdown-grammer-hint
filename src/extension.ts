import { readFileSync } from 'fs';
import path = require('path');
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand('mark.hint', () => {
            const panel = vscode.window.createWebviewPanel(
                'mark.hint',
                'markdown-grammer-hint',
                vscode.ViewColumn.Beside,
                {}
            );
            panel.webview.html = getWebviewContent();
        })
    );
}

function getWebviewContent() {
    return `
	<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .emoji tr {
            letter-spacing: 0.75rem;
            font-size: 2rem;
        }
        .content tr {
            font-size: 1.25rem;
            border: 1px solid #ccc;
        }
        .content td {
            padding: 15px;
        }
        table {
            border-collapse: collapse;
        }
    </style>
</head>
<body>
    <div>
        <table class="content">
        <thead><tr><th>Element</th>
        <th>Markdown Grammar</th>
        </tr></thead>
        <tbody><tr><td>标题（Heading）</td>
        <td># H1 <br> ## H2 <br> ### H3</td>
        </tr><tr><td>粗体（Bold）</td>
        <td><code>**bold text**</code></td>
        </tr><tr><td>斜体（Italic）</td>
        <td><code>*italicized text*</code></td>
        </tr><tr><td>引用块（Blockquote）</td>
        <td>&gt; blockquote</td>
        </tr><tr><td>有序列表（Ordered List）</td>
        <td>1. First item <br> 2. Second item <br> 3. Third item</td>
        </tr><tr><td>无序列表（Unordered List）</td>
        <td>- First item <br> - Second item <br> - Third item</td>
        </tr><tr><td>代码（Code）</td>
        <td>\`code\`</td>
        </tr><tr><td>分隔线（Horizontal Rule）</td>
        <td>---</td>
        </tr><tr><td>链接（Link）</td>
        <td><code>[title](url)</code></td>
        </tr><tr><td>图片（Image）</td>
        <td><code>![alt text](image.jpg)</code></td>
        </tr><tr><td>表格（Table）</td>
		<td>| Syntax      | Description | <br> | ----------- | ----------- | <br> | Header &nbsp; | Title &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |  <br> | Paragraph   | Text &nbsp;&nbsp; |</td>
		</tr><tr><td>代码块（Fenced Code Block）</td>
		<td>\`\`\` <br> { <br> "firstName": "John", <br> "lastName": "Smith", <br> "age": 25 <br> } <br> \`\`\`</td>
		</tr><tr><td>脚注（Footnote）</td>
		<td>Here's a sentence with a footnote. [^1] <br> [^1]: This is the footnote.</td>
		</tr><tr><td>标题编号（Heading ID）</td>
		<td>### My Great Heading {#custom-id}</td>
		</tr><tr><td>定义列表（Definition List）</td>
		<td>term <br> : definition</td>
		</tr><tr><td>删除线（Strikethrough）</td>
		<td>~~The world is flat.~~</td>
		</tr><tr><td>任务列表（Task List）</td>
		<td>- [x] Write the press release <br> - [ ] Update the website <br> - [ ] Contact the media</td>
		</tr>
        </tbody></table></div>
        <table class="emoji">
        <thead>
            emoji😆
        </thead>
        <tr> 
        <td>💯</td>
       
        <td>🔢</td>
       
        <td>😀</td>
       
        <td>😃</td>
       
        <td>😄</td>
       
        <td>😁</td>
       
        <td>😆</td>
       
        <td>😆</td>
       </tr><tr> 
        <td>😅</td>
       
        <td>🤣</td>
       
        <td>😂</td>
       
        <td>🙂</td>
       
        <td>🙃</td>
       
        <td>😉</td>
       
        <td>😊</td>
       
        <td>😇</td>
       </tr><tr> 
        <td>🥰</td>
       
        <td>😍</td>
       
        <td>🤩</td>
       
        <td>😘</td>
       
        <td>😗</td>
       
        <td>☺️</td>
       
        <td>😚</td>
       
        <td>😙</td>
       </tr><tr> 
        <td>🥲</td>
       
        <td>😋</td>
       
        <td>😛</td>
       
        <td>😜</td>
       
        <td>🤪</td>
       
        <td>😝</td>
       
        <td>🤑</td>
       
        <td>🤗</td>
       </tr><tr> 
        <td>🤭</td>
       
        <td>🤫</td>
       
        <td>🤔</td>
       
        <td>🤐</td>
       
        <td>🤨</td>
       
        <td>😐</td>
       
        <td>😑</td>
       
        <td>😶</td>
       </tr><tr> 
        <td>😏</td>
       
        <td>😒</td>
       
        <td>🙄</td>
       
        <td>😬</td>
       
        <td>🤥</td>
       
        <td>😌</td>
       
        <td>😔</td>
       
        <td>😪</td>
       </tr><tr> 
        <td>🤤</td>
       
        <td>😴</td>
       
        <td>😷</td>
       
        <td>🤒</td>
       
        <td>🤕</td>
       
        <td>🤢</td>
       
        <td>🤮</td>
       
        <td>🤧</td>
       </tr><tr> 
        <td>🥵</td>
       
        <td>🥶</td>
       
        <td>🥴</td>
       
        <td>😵</td>
       
        <td>🤯</td>
       
        <td>🤠</td>
       
        <td>🥳</td>
       
        <td>🥸</td>
       </tr><tr> 
        <td>😎</td>
       
        <td>🤓</td>
       
        <td>🧐</td>
       
        <td>😕</td>
       
        <td>😟</td>
       
        <td>🙁</td>
       
        <td>☹️</td>
       
        <td>😮</td>
       </tr><tr> 
        <td>😯</td>
       
        <td>😲</td>
       
        <td>😳</td>
       
        <td>🥺</td>
       
        <td>😦</td>
       
        <td>😧</td>
       
        <td>😨</td>
       
        <td>😰</td>
       </tr><tr> 
        <td>😥</td>
       
        <td>😢</td>
       
        <td>😭</td>
       
        <td>😱</td>
       
        <td>😖</td>
       
        <td>😣</td>
       
        <td>😞</td>
       
        <td>😓</td>
       </tr><tr> 
        <td>😩</td>
       
        <td>😫</td>
       
        <td>🥱</td>
       
        <td>😤</td>
       
        <td>😡</td>
       
        <td>😡</td>
       
        <td>😠</td>
       
        <td>🤬</td>
       </tr><tr> 
        <td>😈</td>
       
        <td>👿</td>
       
        <td>💀</td>
       
        <td>☠️</td>
       
        <td>💩</td>
       
        <td>💩</td>
       
        <td>💩</td>
       
        <td>🤡</td>
       </tr><tr> 
        <td>👹</td>
       
        <td>👺</td>
       
        <td>👻</td>
       
        <td>👽</td>
       
        <td>👾</td>
       
        <td>🤖</td>
       
        <td>😺</td>
       
        <td>😸</td>
       </tr><tr> 
        <td>😹</td>
       
        <td>😻</td>
       
        <td>😼</td>
       
        <td>😽</td>
       
        <td>🙀</td>
       
        <td>😿</td>
       
        <td>😾</td>
       
        <td>🙈</td>
       </tr><tr> 
        <td>🙉</td>
       
        <td>🙊</td>
       
        <td>💋</td>
       
        <td>💌</td>
       
        <td>💘</td>
       
        <td>💝</td>
       
        <td>💖</td>
       
        <td>💗</td>
       </tr><tr> 
        <td>💓</td>
       
        <td>💞</td>
       
        <td>💕</td>
       
        <td>💟</td>
       
        <td>❣️</td>
       
        <td>💔</td>
       
        <td>❤️</td>
       
        <td>🧡</td>
       </tr><tr> 
        <td>💛</td>
       
        <td>💚</td>
       
        <td>💙</td>
       
        <td>💜</td>
       
        <td>🤎</td>
       
        <td>🖤</td>
       
        <td>🤍</td>
       
        <td>💢</td>
       </tr><tr> 
        <td>💥</td>
       
        <td>💥</td>
       
        <td>💫</td>
       
        <td>💦</td>
       
        <td>💨</td>
       
        <td>🕳️</td>
       
        <td>💣</td>
       
        <td>💬</td>
       </tr><tr> 
        <td>👁️‍🗨️</td>
       
        <td>🗨️</td>
       
        <td>🗯️</td>
       
        <td>💭</td>
       
        <td>💤</td>
       
        <td>👋</td>
       
        <td>🤚</td>
       
        <td>🖐️</td>
       </tr><tr> 
        <td>✋</td>
       
        <td>✋</td>
       
        <td>🖖</td>
       
        <td>👌</td>
       
        <td>🤌</td>
       
        <td>🤏</td>
       
        <td>✌️</td>
       
        <td>🤞</td>
       </tr><tr> 
        <td>🤟</td>
       
        <td>🤘</td>
       
        <td>🤙</td>
       
        <td>👈</td>
       
        <td>👉</td>
       
        <td>👆</td>
       
        <td>🖕</td>
       
        <td>🖕</td>
       </tr><tr> 
        <td>👇</td>
       
        <td>☝️</td>
       
        <td>👍</td>
       
        <td>👍</td>
       
        <td>👎</td>
       
        <td>👎</td>
       
        <td>✊</td>
       
        <td>✊</td>
       </tr><tr> 
        <td>👊</td>
       
        <td>👊</td>
       
        <td>👊</td>
       
        <td>🤛</td>
       
        <td>🤜</td>
       
        <td>👏</td>
       
        <td>🙌</td>
       
        <td>👐</td>
       </tr><tr> 
        <td>🤲</td>
       
        <td>🤝</td>
       
        <td>🙏</td>
       
        <td>✍️</td>
       
        <td>💅</td>
       
        <td>🤳</td>
       
        <td>💪</td>
       
        <td>🦾</td>
       </tr><tr> 
        <td>🦿</td>
       
        <td>🦵</td>
       
        <td>🦶</td>
       
        <td>👂</td>
       
        <td>🦻</td>
       
        <td>👃</td>
       
        <td>🧠</td>
       
        <td>🫀</td>
       </tr><tr> 
        <td>🫁</td>
       
        <td>🦷</td>
       
        <td>🦴</td>
       
        <td>👀</td>
       
        <td>👁️</td>
       
        <td>👅</td>
       
        <td>👄</td>
       
        <td>👶</td>
       </tr><tr> 
        <td>🧒</td>
       
        <td>👦</td>
       
        <td>👧</td>
       
        <td>🧑</td>
       
        <td>👱</td>
       
        <td>👨</td>
       
        <td>🧔</td>
       
        <td>👨‍🦰</td>
       </tr><tr> 
        <td>👨‍🦱</td>
       
        <td>👨‍🦳</td>
       
        <td>👨‍🦲</td>
       
        <td>👩</td>
       
        <td>👩‍🦰</td>
       
        <td>🧑‍🦰</td>
       
        <td>👩‍🦱</td>
       
        <td>🧑‍🦱</td>
       </tr><tr> 
        <td>👩‍🦳</td>
       
        <td>🧑‍🦳</td>
       
        <td>👩‍🦲</td>
       
        <td>🧑‍🦲</td>
       
        <td>👱‍♀️</td>
       
        <td>👱‍♀️</td>
       
        <td>👱‍♂️</td>
       
        <td>🧓</td>
       </tr><tr> 
        <td>👴</td>
       
        <td>👵</td>
       
        <td>🙍</td>
       
        <td>🙍‍♂️</td>
       
        <td>🙍‍♀️</td>
       
        <td>🙎</td>
       
        <td>🙎‍♂️</td>
       
        <td>🙎‍♀️</td>
       </tr><tr> 
        <td>🙅</td>
       
        <td>🙅‍♂️</td>
       
        <td>🙅‍♂️</td>
       
        <td>🙅‍♀️</td>
       
        <td>🙅‍♀️</td>
       
        <td>🙆</td>
       
        <td>🙆‍♂️</td>
       
        <td>🙆‍♀️</td>
       </tr><tr> 
        <td>💁</td>
       
        <td>💁</td>
       
        <td>💁‍♂️</td>
       
        <td>💁‍♂️</td>
       
        <td>💁‍♀️</td>
       
        <td>💁‍♀️</td>
       
        <td>🙋</td>
       
        <td>🙋‍♂️</td>
       </tr><tr> 
        <td>🙋‍♀️</td>
       
        <td>🧏</td>
       
        <td>🧏‍♂️</td>
       
        <td>🧏‍♀️</td>
       
        <td>🙇</td>
       
        <td>🙇‍♂️</td>
       
        <td>🙇‍♀️</td>
       
        <td>🤦</td>
       </tr><tr> 
        <td>🤦‍♂️</td>
       
        <td>🤦‍♀️</td>
       
        <td>🤷</td>
       
        <td>🤷‍♂️</td>
       
        <td>🤷‍♀️</td>
       
        <td>🧑‍⚕️</td>
       
        <td>👨‍⚕️</td>
       
        <td>👩‍⚕️</td>
       </tr><tr> 
        <td>🧑‍🎓</td>
       
        <td>👨‍🎓</td>
       
        <td>👩‍🎓</td>
       
        <td>🧑‍🏫</td>
       
        <td>👨‍🏫</td>
       
        <td>👩‍🏫</td>
       
        <td>🧑‍⚖️</td>
       
        <td>👨‍⚖️</td>
       </tr><tr> 
        <td>👩‍⚖️</td>
       
        <td>🧑‍🌾</td>
       
        <td>👨‍🌾</td>
       
        <td>👩‍🌾</td>
       
        <td>🧑‍🍳</td>
       
        <td>👨‍🍳</td>
       
        <td>👩‍🍳</td>
       
        <td>🧑‍🔧</td>
       </tr><tr> 
        <td>👨‍🔧</td>
       
        <td>👩‍🔧</td>
       
        <td>🧑‍🏭</td>
       
        <td>👨‍🏭</td>
       
        <td>👩‍🏭</td>
       
        <td>🧑‍💼</td>
       
        <td>👨‍💼</td>
       
        <td>👩‍💼</td>
       </tr><tr> 
        <td>🧑‍🔬</td>
       
        <td>👨‍🔬</td>
       
        <td>👩‍🔬</td>
       
        <td>🧑‍💻</td>
       
        <td>👨‍💻</td>
       
        <td>👩‍💻</td>
       
        <td>🧑‍🎤</td>
       
        <td>👨‍🎤</td>
       </tr><tr> 
        <td>👩‍🎤</td>
       
        <td>🧑‍🎨</td>
       
        <td>👨‍🎨</td>
       
        <td>👩‍🎨</td>
       
        <td>🧑‍✈️</td>
       
        <td>👨‍✈️</td>
       
        <td>👩‍✈️</td>
       
        <td>🧑‍🚀</td>
       </tr><tr> 
        <td>👨‍🚀</td>
       
        <td>👩‍🚀</td>
       
        <td>🧑‍🚒</td>
       
        <td>👨‍🚒</td>
       
        <td>👩‍🚒</td>
       
        <td>👮</td>
       
        <td>👮</td>
       
        <td>👮‍♂️</td>
       </tr><tr> 
        <td>👮‍♀️</td>
       
        <td>🕵️</td>
       
        <td>🕵️‍♂️</td>
       
        <td>🕵️‍♀️</td>
       
        <td>💂</td>
       
        <td>💂‍♂️</td>
       
        <td>💂‍♀️</td>
       
        <td>🥷</td>
       </tr><tr> 
        <td>👷</td>
       
        <td>👷‍♂️</td>
       
        <td>👷‍♀️</td>
       
        <td>🤴</td>
       
        <td>👸</td>
       
        <td>👳</td>
       
        <td>👳‍♂️</td>
       
        <td>👳‍♀️</td>
       </tr><tr> 
        <td>👲</td>
       
        <td>🧕</td>
       
        <td>🤵</td>
       
        <td>🤵‍♂️</td>
       
        <td>🤵‍♀️</td>
       
        <td>👰</td>
       
        <td>👰‍♂️</td>
       
        <td>👰‍♀️</td>
       </tr><tr> 
        <td>👰‍♀️</td>
       
        <td>🤰</td>
       
        <td>🤱</td>
       
        <td>👩‍🍼</td>
       
        <td>👨‍🍼</td>
       
        <td>🧑‍🍼</td>
       
        <td>👼</td>
       
        <td>🎅</td>
       </tr><tr> 
        <td>🤶</td>
       
        <td>🧑‍🎄</td>
       
        <td>🦸</td>
       
        <td>🦸‍♂️</td>
       
        <td>🦸‍♀️</td>
       
        <td>🦹</td>
       
        <td>🦹‍♂️</td>
       
        <td>🦹‍♀️</td>
       </tr><tr> 
        <td>🧙</td>
       
        <td>🧙‍♂️</td>
       
        <td>🧙‍♀️</td>
       
        <td>🧚</td>
       
        <td>🧚‍♂️</td>
       
        <td>🧚‍♀️</td>
       
        <td>🧛</td>
       
        <td>🧛‍♂️</td>
       </tr><tr> 
        <td>🧛‍♀️</td>
       
        <td>🧜</td>
       
        <td>🧜‍♂️</td>
       
        <td>🧜‍♀️</td>
       
        <td>🧝</td>
       
        <td>🧝‍♂️</td>
       
        <td>🧝‍♀️</td>
       
        <td>🧞</td>
       </tr><tr> 
        <td>🧞‍♂️</td>
       
        <td>🧞‍♀️</td>
       
        <td>🧟</td>
       
        <td>🧟‍♂️</td>
       
        <td>🧟‍♀️</td>
       
        <td>💆</td>
       
        <td>💆‍♂️</td>
       
        <td>💆‍♀️</td>
       </tr><tr> 
        <td>💇</td>
       
        <td>💇‍♂️</td>
       
        <td>💇‍♀️</td>
       
        <td>🚶</td>
       
        <td>🚶‍♂️</td>
       
        <td>🚶‍♀️</td>
       
        <td>🧍</td>
       
        <td>🧍‍♂️</td>
       </tr><tr> 
        <td>🧍‍♀️</td>
       
        <td>🧎</td>
       
        <td>🧎‍♂️</td>
       
        <td>🧎‍♀️</td>
       
        <td>🧑‍🦯</td>
       
        <td>👨‍🦯</td>
       
        <td>👩‍🦯</td>
       
        <td>🧑‍🦼</td>
       </tr><tr> 
        <td>👨‍🦼</td>
       
        <td>👩‍🦼</td>
       
        <td>🧑‍🦽</td>
       
        <td>👨‍🦽</td>
       
        <td>👩‍🦽</td>
       
        <td>🏃</td>
       
        <td>🏃</td>
       
        <td>🏃‍♂️</td>
       </tr><tr> 
        <td>🏃‍♀️</td>
       
        <td>💃</td>
       
        <td>💃</td>
       
        <td>🕺</td>
       
        <td>🕴️</td>
       
        <td>👯</td>
       
        <td>👯‍♂️</td>
       
        <td>👯‍♀️</td>
       </tr><tr> 
        <td>🧖</td>
       
        <td>🧖‍♂️</td>
       
        <td>🧖‍♀️</td>
       
        <td>🧗</td>
       
        <td>🧗‍♂️</td>
       
        <td>🧗‍♀️</td>
       
        <td>🤺</td>
       
        <td>🏇</td>
       </tr><tr> 
        <td>⛷️</td>
       
        <td>🏂</td>
       
        <td>🏌️</td>
       
        <td>🏌️‍♂️</td>
       
        <td>🏌️‍♀️</td>
       
        <td>🏄</td>
       
        <td>🏄‍♂️</td>
       
        <td>🏄‍♀️</td>
       </tr><tr> 
        <td>🚣</td>
       
        <td>🚣‍♂️</td>
       
        <td>🚣‍♀️</td>
       
        <td>🏊</td>
       
        <td>🏊‍♂️</td>
       
        <td>🏊‍♀️</td>
       
        <td>⛹️</td>
       
        <td>⛹️‍♂️</td>
       </tr><tr> 
        <td>⛹️‍♂️</td>
       
        <td>⛹️‍♀️</td>
       
        <td>⛹️‍♀️</td>
       
        <td>🏋️</td>
       
        <td>🏋️‍♂️</td>
       
        <td>🏋️‍♀️</td>
       
        <td>🚴</td>
       
        <td>🚴‍♂️</td>
       </tr><tr> 
        <td>🚴‍♀️</td>
       
        <td>🚵</td>
       
        <td>🚵‍♂️</td>
       
        <td>🚵‍♀️</td>
       
        <td>🤸</td>
       
        <td>🤸‍♂️</td>
       
        <td>🤸‍♀️</td>
       
        <td>🤼</td>
       </tr><tr> 
        <td>🤼‍♂️</td>
       
        <td>🤼‍♀️</td>
       
        <td>🤽</td>
       
        <td>🤽‍♂️</td>
       
        <td>🤽‍♀️</td>
       
        <td>🤾</td>
       
        <td>🤾‍♂️</td>
       
        <td>🤾‍♀️</td>
       </tr><tr> 
        <td>🤹</td>
       
        <td>🤹‍♂️</td>
       
        <td>🤹‍♀️</td>
       
        <td>🧘</td>
       
        <td>🧘‍♂️</td>
       
        <td>🧘‍♀️</td>
       
        <td>🛀</td>
       
        <td>🛌</td>
       </tr><tr> 
        <td>🧑‍🤝‍🧑</td>
       
        <td>👭</td>
       
        <td>👫</td>
       
        <td>👬</td>
       
        <td>💏</td>
       
        <td>👩‍❤️‍💋‍👨</td>
       
        <td>👨‍❤️‍💋‍👨</td>
       
        <td>👩‍❤️‍💋‍👩</td>
       </tr><tr> 
        <td>💑</td>
       
        <td>👩‍❤️‍👨</td>
       
        <td>👨‍❤️‍👨</td>
       
        <td>👩‍❤️‍👩</td>
       
        <td>👪</td>
       
        <td>👨‍👩‍👦</td>
       
        <td>👨‍👩‍👧</td>
       
        <td>👨‍👩‍👧‍👦</td>
       </tr><tr> 
        <td>👨‍👩‍👦‍👦</td>
       
        <td>👨‍👩‍👧‍👧</td>
       
        <td>👨‍👨‍👦</td>
       
        <td>👨‍👨‍👧</td>
       
        <td>👨‍👨‍👧‍👦</td>
       
        <td>👨‍👨‍👦‍👦</td>
       
        <td>👨‍👨‍👧‍👧</td>
       
        <td>👩‍👩‍👦</td>
       </tr><tr> 
        <td>👩‍👩‍👧</td>
       
        <td>👩‍👩‍👧‍👦</td>
       
        <td>👩‍👩‍👦‍👦</td>
       
        <td>👩‍👩‍👧‍👧</td>
       
        <td>👨‍👦</td>
       
        <td>👨‍👦‍👦</td>
       
        <td>👨‍👧</td>
       
        <td>👨‍👧‍👦</td>
       </tr><tr> 
        <td>👨‍👧‍👧</td>
       
        <td>👩‍👦</td>
       
        <td>👩‍👦‍👦</td>
       
        <td>👩‍👧</td>
       
        <td>👩‍👧‍👦</td>
       
        <td>👩‍👧‍👧</td>
       
        <td>🗣️</td>
       
        <td>👤</td>
       </tr><tr> 
        <td>👥</td>
       
        <td>🫂</td>
       
        <td>👣</td>
       
        <td>🐵</td>
       
        <td>🐒</td>
       
        <td>🦍</td>
       
        <td>🦧</td>
       
        <td>🐶</td>
       </tr><tr> 
        <td>🐕</td>
       
        <td>🦮</td>
       
        <td>🐕‍🦺</td>
       
        <td>🐩</td>
       
        <td>🐺</td>
       
        <td>🦊</td>
       
        <td>🦝</td>
       
        <td>🐱</td>
       </tr><tr> 
        <td>🐈</td>
       
        <td>🐈‍⬛</td>
       
        <td>🦁</td>
       
        <td>🐯</td>
       
        <td>🐅</td>
       
        <td>🐆</td>
       
        <td>🐴</td>
       
        <td>🐎</td>
       </tr><tr> 
        <td>🦄</td>
       
        <td>🦓</td>
       
        <td>🦌</td>
       
        <td>🦬</td>
       
        <td>🐮</td>
       
        <td>🐂</td>
       
        <td>🐃</td>
       
        <td>🐄</td>
       </tr><tr> 
        <td>🐷</td>
       
        <td>🐖</td>
       
        <td>🐗</td>
       
        <td>🐽</td>
       
        <td>🐏</td>
       
        <td>🐑</td>
       
        <td>🐐</td>
       
        <td>🐪</td>
       </tr><tr> 
        <td>🐫</td>
       
        <td>🦙</td>
       
        <td>🦒</td>
       
        <td>🐘</td>
       
        <td>🦣</td>
       
        <td>🦏</td>
       
        <td>🦛</td>
       
        <td>🐭</td>
       </tr><tr> 
        <td>🐁</td>
       
        <td>🐀</td>
       
        <td>🐹</td>
       
        <td>🐰</td>
       
        <td>🐇</td>
       
        <td>🐿️</td>
       
        <td>🦫</td>
       
        <td>🦔</td>
       </tr><tr> 
        <td>🦇</td>
       
        <td>🐻</td>
       
        <td>🐻‍❄️</td>
       
        <td>🐨</td>
       
        <td>🐼</td>
       
        <td>🦥</td>
       
        <td>🦦</td>
       
        <td>🦨</td>
       </tr><tr> 
        <td>🦘</td>
       
        <td>🦡</td>
       
        <td>🐾</td>
       
        <td>🐾</td>
       
        <td>🦃</td>
       
        <td>🐔</td>
       
        <td>🐓</td>
       
        <td>🐣</td>
       </tr><tr> 
        <td>🐤</td>
       
        <td>🐥</td>
       
        <td>🐦</td>
       
        <td>🐧</td>
       
        <td>🕊️</td>
       
        <td>🦅</td>
       
        <td>🦆</td>
       
        <td>🦢</td>
       </tr><tr> 
        <td>🦉</td>
       
        <td>🦤</td>
       
        <td>🪶</td>
       
        <td>🦩</td>
       
        <td>🦚</td>
       
        <td>🦜</td>
       
        <td>🐸</td>
       
        <td>🐊</td>
       </tr><tr> 
        <td>🐢</td>
       
        <td>🦎</td>
       
        <td>🐍</td>
       
        <td>🐲</td>
       
        <td>🐉</td>
       
        <td>🦕</td>
       
        <td>🦖</td>
       
        <td>🐳</td>
       </tr><tr> 
        <td>🐋</td>
       
        <td>🐬</td>
       
        <td>🐬</td>
       
        <td>🦭</td>
       
        <td>🐟</td>
       
        <td>🐠</td>
       
        <td>🐡</td>
       
        <td>🦈</td>
       </tr><tr> 
        <td>🐙</td>
       
        <td>🐚</td>
       
        <td>🐌</td>
       
        <td>🦋</td>
       
        <td>🐛</td>
       
        <td>🐜</td>
       
        <td>🐝</td>
       
        <td>🐝</td>
       </tr><tr> 
        <td>🪲</td>
       
        <td>🐞</td>
       
        <td>🦗</td>
       
        <td>🪳</td>
       
        <td>🕷️</td>
       
        <td>🕸️</td>
       
        <td>🦂</td>
       
        <td>🦟</td>
       </tr><tr> 
        <td>🪰</td>
       
        <td>🪱</td>
       
        <td>🦠</td>
       
        <td>💐</td>
       
        <td>🌸</td>
       
        <td>💮</td>
       
        <td>🏵️</td>
       
        <td>🌹</td>
       </tr><tr> 
        <td>🥀</td>
       
        <td>🌺</td>
       
        <td>🌻</td>
       
        <td>🌼</td>
       
        <td>🌷</td>
       
        <td>🌱</td>
       
        <td>🪴</td>
       
        <td>🌲</td>
       </tr><tr> 
        <td>🌳</td>
       
        <td>🌴</td>
       
        <td>🌵</td>
       
        <td>🌾</td>
       
        <td>🌿</td>
       
        <td>☘️</td>
       
        <td>🍀</td>
       
        <td>🍁</td>
       </tr><tr> 
        <td>🍂</td>
       
        <td>🍃</td>
       
        <td>🍇</td>
       
        <td>🍈</td>
       
        <td>🍉</td>
       
        <td>🍊</td>
       
        <td>🍊</td>
       
        <td>🍊</td>
       </tr><tr> 
        <td>🍋</td>
       
        <td>🍌</td>
       
        <td>🍍</td>
       
        <td>🥭</td>
       
        <td>🍎</td>
       
        <td>🍏</td>
       
        <td>🍐</td>
       
        <td>🍑</td>
       </tr><tr> 
        <td>🍒</td>
       
        <td>🍓</td>
       
        <td>🫐</td>
       
        <td>🥝</td>
       
        <td>🍅</td>
       
        <td>🫒</td>
       
        <td>🥥</td>
       
        <td>🥑</td>
       </tr><tr> 
        <td>🍆</td>
       
        <td>🥔</td>
       
        <td>🥕</td>
       
        <td>🌽</td>
       
        <td>🌶️</td>
       
        <td>🫑</td>
       
        <td>🥒</td>
       
        <td>🥬</td>
       </tr><tr> 
        <td>🥦</td>
       
        <td>🧄</td>
       
        <td>🧅</td>
       
        <td>🍄</td>
       
        <td>🥜</td>
       
        <td>🌰</td>
       
        <td>🍞</td>
       
        <td>🥐</td>
       </tr><tr> 
        <td>🥖</td>
       
        <td>🫓</td>
       
        <td>🥨</td>
       
        <td>🥯</td>
       
        <td>🥞</td>
       
        <td>🧇</td>
       
        <td>🧀</td>
       
        <td>🍖</td>
       </tr><tr> 
        <td>🍗</td>
       
        <td>🥩</td>
       
        <td>🥓</td>
       
        <td>🍔</td>
       
        <td>🍟</td>
       
        <td>🍕</td>
       
        <td>🌭</td>
       
        <td>🥪</td>
       </tr><tr> 
        <td>🌮</td>
       
        <td>🌯</td>
       
        <td>🫔</td>
       
        <td>🥙</td>
       
        <td>🧆</td>
       
        <td>🥚</td>
       
        <td>🍳</td>
       
        <td>🥘</td>
       </tr><tr> 
        <td>🍲</td>
       
        <td>🫕</td>
       
        <td>🥣</td>
       
        <td>🥗</td>
       
        <td>🍿</td>
       
        <td>🧈</td>
       
        <td>🧂</td>
       
        <td>🥫</td>
       </tr><tr> 
        <td>🍱</td>
       
        <td>🍘</td>
       
        <td>🍙</td>
       
        <td>🍚</td>
       
        <td>🍛</td>
       
        <td>🍜</td>
       
        <td>🍝</td>
       
        <td>🍠</td>
       </tr><tr> 
        <td>🍢</td>
       
        <td>🍣</td>
       
        <td>🍤</td>
       
        <td>🍥</td>
       
        <td>🥮</td>
       
        <td>🍡</td>
       
        <td>🥟</td>
       
        <td>🥠</td>
       </tr><tr> 
        <td>🥡</td>
       
        <td>🦀</td>
       
        <td>🦞</td>
       
        <td>🦐</td>
       
        <td>🦑</td>
       
        <td>🦪</td>
       
        <td>🍦</td>
       
        <td>🍧</td>
       </tr><tr> 
        <td>🍨</td>
       
        <td>🍩</td>
       
        <td>🍪</td>
       
        <td>🎂</td>
       
        <td>🍰</td>
       
        <td>🧁</td>
       
        <td>🥧</td>
       
        <td>🍫</td>
       </tr><tr> 
        <td>🍬</td>
       
        <td>🍭</td>
       
        <td>🍮</td>
       
        <td>🍯</td>
       
        <td>🍼</td>
       
        <td>🥛</td>
       
        <td>☕</td>
       
        <td>🫖</td>
       </tr><tr> 
        <td>🍵</td>
       
        <td>🍶</td>
       
        <td>🍾</td>
       
        <td>🍷</td>
       
        <td>🍸</td>
       
        <td>🍹</td>
       
        <td>🍺</td>
       
        <td>🍻</td>
       </tr><tr> 
        <td>🥂</td>
       
        <td>🥃</td>
       
        <td>🥤</td>
       
        <td>🧋</td>
       
        <td>🧃</td>
       
        <td>🧉</td>
       
        <td>🧊</td>
       
        <td>🥢</td>
       </tr><tr> 
        <td>🍽️</td>
       
        <td>🍴</td>
       
        <td>🥄</td>
       
        <td>🔪</td>
       
        <td>🔪</td>
       
        <td>🏺</td>
       
        <td>🌍</td>
       
        <td>🌎</td>
       </tr><tr> 
        <td>🌏</td>
       
        <td>🌐</td>
       
        <td>🗺️</td>
       
        <td>🗾</td>
       
        <td>🧭</td>
       
        <td>🏔️</td>
       
        <td>⛰️</td>
       
        <td>🌋</td>
       </tr><tr> 
        <td>🗻</td>
       
        <td>🏕️</td>
       
        <td>🏖️</td>
       
        <td>🏜️</td>
       
        <td>🏝️</td>
       
        <td>🏞️</td>
       
        <td>🏟️</td>
       
        <td>🏛️</td>
       </tr><tr> 
        <td>🏗️</td>
       
        <td>🧱</td>
       
        <td>🪨</td>
       
        <td>🪵</td>
       
        <td>🛖</td>
       
        <td>🏘️</td>
       
        <td>🏚️</td>
       
        <td>🏠</td>
       </tr><tr> 
        <td>🏡</td>
       
        <td>🏢</td>
       
        <td>🏣</td>
       
        <td>🏤</td>
       
        <td>🏥</td>
       
        <td>🏦</td>
       
        <td>🏨</td>
       
        <td>🏩</td>
       </tr><tr> 
        <td>🏪</td>
       
        <td>🏫</td>
       
        <td>🏬</td>
       
        <td>🏭</td>
       
        <td>🏯</td>
       
        <td>🏰</td>
       
        <td>💒</td>
       
        <td>🗼</td>
       </tr><tr> 
        <td>🗽</td>
       
        <td>⛪</td>
       
        <td>🕌</td>
       
        <td>🛕</td>
       
        <td>🕍</td>
       
        <td>⛩️</td>
       
        <td>🕋</td>
       
        <td>⛲</td>
       </tr><tr> 
        <td>⛺</td>
       
        <td>🌁</td>
       
        <td>🌃</td>
       
        <td>🏙️</td>
       
        <td>🌄</td>
       
        <td>🌅</td>
       
        <td>🌆</td>
       
        <td>🌇</td>
       </tr><tr> 
        <td>🌉</td>
       
        <td>♨️</td>
       
        <td>🎠</td>
       
        <td>🎡</td>
       
        <td>🎢</td>
       
        <td>💈</td>
       
        <td>🎪</td>
       
        <td>🚂</td>
       </tr><tr> 
        <td>🚃</td>
       
        <td>🚄</td>
       
        <td>🚅</td>
       
        <td>🚆</td>
       
        <td>🚇</td>
       
        <td>🚈</td>
       
        <td>🚉</td>
       
        <td>🚊</td>
       </tr><tr> 
        <td>🚝</td>
       
        <td>🚞</td>
       
        <td>🚋</td>
       
        <td>🚌</td>
       
        <td>🚍</td>
       
        <td>🚎</td>
       
        <td>🚐</td>
       
        <td>🚑</td>
       </tr><tr> 
        <td>🚒</td>
       
        <td>🚓</td>
       
        <td>🚔</td>
       
        <td>🚕</td>
       
        <td>🚖</td>
       
        <td>🚗</td>
       
        <td>🚗</td>
       
        <td>🚘</td>
       </tr><tr> 
        <td>🚙</td>
       
        <td>🛻</td>
       
        <td>🚚</td>
       
        <td>🚛</td>
       
        <td>🚜</td>
       
        <td>🏎️</td>
       
        <td>🏍️</td>
       
        <td>🛵</td>
       </tr><tr> 
        <td>🦽</td>
       
        <td>🦼</td>
       
        <td>🛺</td>
       
        <td>🚲</td>
       
        <td>🛴</td>
       
        <td>🛹</td>
       
        <td>🛼</td>
       
        <td>🚏</td>
       </tr><tr> 
        <td>🛣️</td>
       
        <td>🛤️</td>
       
        <td>🛢️</td>
       
        <td>⛽</td>
       
        <td>🚨</td>
       
        <td>🚥</td>
       
        <td>🚦</td>
       
        <td>🛑</td>
       </tr><tr> 
        <td>🚧</td>
       
        <td>⚓</td>
       
        <td>⛵</td>
       
        <td>⛵</td>
       
        <td>🛶</td>
       
        <td>🚤</td>
       
        <td>🛳️</td>
       
        <td>⛴️</td>
       </tr><tr> 
        <td>🛥️</td>
       
        <td>🚢</td>
       
        <td>✈️</td>
       
        <td>🛩️</td>
       
        <td>🛫</td>
       
        <td>🛬</td>
       
        <td>🪂</td>
       
        <td>💺</td>
       </tr><tr> 
        <td>🚁</td>
       
        <td>🚟</td>
       
        <td>🚠</td>
       
        <td>🚡</td>
       
        <td>🛰️</td>
       
        <td>🚀</td>
       
        <td>🛸</td>
       
        <td>🛎️</td>
       </tr><tr> 
        <td>🧳</td>
       
        <td>⌛</td>
       
        <td>⏳</td>
       
        <td>⌚</td>
       
        <td>⏰</td>
       
        <td>⏱️</td>
       
        <td>⏲️</td>
       
        <td>🕰️</td>
       </tr><tr> 
        <td>🕛</td>
       
        <td>🕧</td>
       
        <td>🕐</td>
       
        <td>🕜</td>
       
        <td>🕑</td>
       
        <td>🕝</td>
       
        <td>🕒</td>
       
        <td>🕞</td>
       </tr><tr> 
        <td>🕓</td>
       
        <td>🕟</td>
       
        <td>🕔</td>
       
        <td>🕠</td>
       
        <td>🕕</td>
       
        <td>🕡</td>
       
        <td>🕖</td>
       
        <td>🕢</td>
       </tr><tr> 
        <td>🕗</td>
       
        <td>🕣</td>
       
        <td>🕘</td>
       
        <td>🕤</td>
       
        <td>🕙</td>
       
        <td>🕥</td>
       
        <td>🕚</td>
       
        <td>🕦</td>
       </tr><tr> 
        <td>🌑</td>
       
        <td>🌒</td>
       
        <td>🌓</td>
       
        <td>🌔</td>
       
        <td>🌔</td>
       
        <td>🌕</td>
       
        <td>🌖</td>
       
        <td>🌗</td>
       </tr><tr> 
        <td>🌘</td>
       
        <td>🌙</td>
       
        <td>🌚</td>
       
        <td>🌛</td>
       
        <td>🌜</td>
       
        <td>🌡️</td>
       
        <td>☀️</td>
       
        <td>🌝</td>
       </tr><tr> 
        <td>🌞</td>
       
        <td>🪐</td>
       
        <td>⭐</td>
       
        <td>🌟</td>
       
        <td>🌠</td>
       
        <td>🌌</td>
       
        <td>☁️</td>
       
        <td>⛅</td>
       </tr><tr> 
        <td>⛈️</td>
       
        <td>🌤️</td>
       
        <td>🌥️</td>
       
        <td>🌦️</td>
       
        <td>🌧️</td>
       
        <td>🌨️</td>
       
        <td>🌩️</td>
       
        <td>🌪️</td>
       </tr><tr> 
        <td>🌫️</td>
       
        <td>🌬️</td>
       
        <td>🌀</td>
       
        <td>🌈</td>
       
        <td>🌂</td>
       
        <td>☂️</td>
       
        <td>☔</td>
       
        <td>⛱️</td>
       </tr><tr> 
        <td>⚡</td>
       
        <td>❄️</td>
       
        <td>☃️</td>
       
        <td>⛄</td>
       
        <td>☄️</td>
       
        <td>🔥</td>
       
        <td>💧</td>
       
        <td>🌊</td>
       </tr><tr> 
        <td>🎃</td>
       
        <td>🎄</td>
       
        <td>🎆</td>
       
        <td>🎇</td>
       
        <td>🧨</td>
       
        <td>✨</td>
       
        <td>🎈</td>
       
        <td>🎉</td>
       </tr><tr> 
        <td>🎊</td>
       
        <td>🎋</td>
       
        <td>🎍</td>
       
        <td>🎎</td>
       
        <td>🎏</td>
       
        <td>🎐</td>
       
        <td>🎑</td>
       
        <td>🧧</td>
       </tr><tr> 
        <td>🎀</td>
       
        <td>🎁</td>
       
        <td>🎗️</td>
       
        <td>🎟️</td>
       
        <td>🎫</td>
       
        <td>🎖️</td>
       
        <td>🏆</td>
       
        <td>🏅</td>
       </tr><tr> 
        <td>🥇</td>
       
        <td>🥈</td>
       
        <td>🥉</td>
       
        <td>⚽</td>
       
        <td>⚾</td>
       
        <td>🥎</td>
       
        <td>🏀</td>
       
        <td>🏐</td>
       </tr><tr> 
        <td>🏈</td>
       
        <td>🏉</td>
       
        <td>🎾</td>
       
        <td>🥏</td>
       
        <td>🎳</td>
       
        <td>🏏</td>
       
        <td>🏑</td>
       
        <td>🏒</td>
       </tr><tr> 
        <td>🥍</td>
       
        <td>🏓</td>
       
        <td>🏸</td>
       
        <td>🥊</td>
       
        <td>🥋</td>
       
        <td>🥅</td>
       
        <td>⛳</td>
       
        <td>⛸️</td>
       </tr><tr> 
        <td>🎣</td>
       
        <td>🤿</td>
       
        <td>🎽</td>
       
        <td>🎿</td>
       
        <td>🛷</td>
       
        <td>🥌</td>
       
        <td>🎯</td>
       
        <td>🪀</td>
       </tr><tr> 
        <td>🪁</td>
       
        <td>🎱</td>
       
        <td>🔮</td>
       
        <td>🪄</td>
       
        <td>🧿</td>
       
        <td>🎮</td>
       
        <td>🕹️</td>
       
        <td>🎰</td>
       </tr><tr> 
        <td>🎲</td>
       
        <td>🧩</td>
       
        <td>🧸</td>
       
        <td>🪅</td>
       
        <td>🪆</td>
       
        <td>♠️</td>
       
        <td>♥️</td>
       
        <td>♦️</td>
       </tr><tr> 
        <td>♣️</td>
       
        <td>♟️</td>
       
        <td>🃏</td>
       
        <td>🀄</td>
       
        <td>🎴</td>
       
        <td>🎭</td>
       
        <td>🖼️</td>
       
        <td>🎨</td>
       </tr><tr> 
        <td>🧵</td>
       
        <td>🪡</td>
       
        <td>🧶</td>
       
        <td>🪢</td>
       
        <td>👓</td>
       
        <td>🕶️</td>
       
        <td>🥽</td>
       
        <td>🥼</td>
       </tr><tr> 
        <td>🦺</td>
       
        <td>👔</td>
       
        <td>👕</td>
       
        <td>👕</td>
       
        <td>👖</td>
       
        <td>🧣</td>
       
        <td>🧤</td>
       
        <td>🧥</td>
       </tr><tr> 
        <td>🧦</td>
       
        <td>👗</td>
       
        <td>👘</td>
       
        <td>🥻</td>
       
        <td>🩱</td>
       
        <td>🩲</td>
       
        <td>🩳</td>
       
        <td>👙</td>
       </tr><tr> 
        <td>👚</td>
       
        <td>👛</td>
       
        <td>👜</td>
       
        <td>👝</td>
       
        <td>🛍️</td>
       
        <td>🎒</td>
       
        <td>🩴</td>
       
        <td>👞</td>
       </tr><tr> 
        <td>👞</td>
       
        <td>👟</td>
       
        <td>🥾</td>
       
        <td>🥿</td>
       
        <td>👠</td>
       
        <td>👡</td>
       
        <td>🩰</td>
       
        <td>👢</td>
       </tr><tr> 
        <td>👑</td>
       
        <td>👒</td>
       
        <td>🎩</td>
       
        <td>🎓</td>
       
        <td>🧢</td>
       
        <td>🪖</td>
       
        <td>⛑️</td>
       
        <td>📿</td>
       </tr><tr> 
        <td>💄</td>
       
        <td>💍</td>
       
        <td>💎</td>
       
        <td>🔇</td>
       
        <td>🔈</td>
       
        <td>🔉</td>
       
        <td>🔊</td>
       
        <td>📢</td>
       </tr><tr> 
        <td>📣</td>
       
        <td>📯</td>
       
        <td>🔔</td>
       
        <td>🔕</td>
       
        <td>🎼</td>
       
        <td>🎵</td>
       
        <td>🎶</td>
       
        <td>🎙️</td>
       </tr><tr> 
        <td>🎚️</td>
       
        <td>🎛️</td>
       
        <td>🎤</td>
       
        <td>🎧</td>
       
        <td>📻</td>
       
        <td>🎷</td>
       
        <td>🪗</td>
       
        <td>🎸</td>
       </tr><tr> 
        <td>🎹</td>
       
        <td>🎺</td>
       
        <td>🎻</td>
       
        <td>🪕</td>
       
        <td>🥁</td>
       
        <td>🪘</td>
       
        <td>📱</td>
       
        <td>📲</td>
       </tr><tr> 
        <td>☎️</td>
       
        <td>☎️</td>
       
        <td>📞</td>
       
        <td>📟</td>
       
        <td>📠</td>
       
        <td>🔋</td>
       
        <td>🔌</td>
       
        <td>💻</td>
       </tr><tr> 
        <td>🖥️</td>
       
        <td>🖨️</td>
       
        <td>⌨️</td>
       
        <td>🖱️</td>
       
        <td>🖲️</td>
       
        <td>💽</td>
       
        <td>💾</td>
       
        <td>💿</td>
       </tr><tr> 
        <td>📀</td>
       
        <td>🧮</td>
       
        <td>🎥</td>
       
        <td>🎞️</td>
       
        <td>📽️</td>
       
        <td>🎬</td>
       
        <td>📺</td>
       
        <td>📷</td>
       </tr><tr> 
        <td>📸</td>
       
        <td>📹</td>
       
        <td>📼</td>
       
        <td>🔍</td>
       
        <td>🔎</td>
       
        <td>🕯️</td>
       
        <td>💡</td>
       
        <td>🔦</td>
       </tr><tr> 
        <td>🏮</td>
       
        <td>🏮</td>
       
        <td>🪔</td>
       
        <td>📔</td>
       
        <td>📕</td>
       
        <td>📖</td>
       
        <td>📖</td>
       
        <td>📗</td>
       </tr><tr> 
        <td>📘</td>
       
        <td>📙</td>
       
        <td>📚</td>
       
        <td>📓</td>
       
        <td>📒</td>
       
        <td>📃</td>
       
        <td>📜</td>
       
        <td>📄</td>
       </tr><tr> 
        <td>📰</td>
       
        <td>🗞️</td>
       
        <td>📑</td>
       
        <td>🔖</td>
       
        <td>🏷️</td>
       
        <td>💰</td>
       
        <td>🪙</td>
       
        <td>💴</td>
       </tr><tr> 
        <td>💵</td>
       
        <td>💶</td>
       
        <td>💷</td>
       
        <td>💸</td>
       
        <td>💳</td>
       
        <td>🧾</td>
       
        <td>💹</td>
       
        <td>✉️</td>
       </tr><tr> 
        <td>📧</td>
       
        <td>📧</td>
       
        <td>📨</td>
       
        <td>📩</td>
       
        <td>📤</td>
       
        <td>📥</td>
       
        <td>📦</td>
       
        <td>📫</td>
       </tr><tr> 
        <td>📪</td>
       
        <td>📬</td>
       
        <td>📭</td>
       
        <td>📮</td>
       
        <td>🗳️</td>
       
        <td>✏️</td>
       
        <td>✒️</td>
       
        <td>🖋️</td>
       </tr><tr> 
        <td>🖊️</td>
       
        <td>🖌️</td>
       
        <td>🖍️</td>
       
        <td>📝</td>
       
        <td>📝</td>
       
        <td>💼</td>
       
        <td>📁</td>
       
        <td>📂</td>
       </tr><tr> 
        <td>🗂️</td>
       
        <td>📅</td>
       
        <td>📆</td>
       
        <td>🗒️</td>
       
        <td>🗓️</td>
       
        <td>📇</td>
       
        <td>📈</td>
       
        <td>📉</td>
       </tr><tr> 
        <td>📊</td>
       
        <td>📋</td>
       
        <td>📌</td>
       
        <td>📍</td>
       
        <td>📎</td>
       
        <td>🖇️</td>
       
        <td>📏</td>
       
        <td>📐</td>
       </tr><tr> 
        <td>✂️</td>
       
        <td>🗃️</td>
       
        <td>🗄️</td>
       
        <td>🗑️</td>
       
        <td>🔒</td>
       
        <td>🔓</td>
       
        <td>🔏</td>
       
        <td>🔐</td>
       </tr><tr> 
        <td>🔑</td>
       
        <td>🗝️</td>
       
        <td>🔨</td>
       
        <td>🪓</td>
       
        <td>⛏️</td>
       
        <td>⚒️</td>
       
        <td>🛠️</td>
       
        <td>🗡️</td>
       </tr><tr> 
        <td>⚔️</td>
       
        <td>🔫</td>
       
        <td>🪃</td>
       
        <td>🏹</td>
       
        <td>🛡️</td>
       
        <td>🪚</td>
       
        <td>🔧</td>
       
        <td>🪛</td>
       </tr><tr> 
        <td>🔩</td>
       
        <td>⚙️</td>
       
        <td>🗜️</td>
       
        <td>⚖️</td>
       
        <td>🦯</td>
       
        <td>🔗</td>
       
        <td>⛓️</td>
       
        <td>🪝</td>
       </tr><tr> 
        <td>🧰</td>
       
        <td>🧲</td>
       
        <td>🪜</td>
       
        <td>⚗️</td>
       
        <td>🧪</td>
       
        <td>🧫</td>
       
        <td>🧬</td>
       
        <td>🔬</td>
       </tr><tr> 
        <td>🔭</td>
       
        <td>📡</td>
       
        <td>💉</td>
       
        <td>🩸</td>
       
        <td>💊</td>
       
        <td>🩹</td>
       
        <td>🩺</td>
       
        <td>🚪</td>
       </tr><tr> 
        <td>🛗</td>
       
        <td>🪞</td>
       
        <td>🪟</td>
       
        <td>🛏️</td>
       
        <td>🛋️</td>
       
        <td>🪑</td>
       
        <td>🚽</td>
       
        <td>🪠</td>
       </tr><tr> 
        <td>🚿</td>
       
        <td>🛁</td>
       
        <td>🪤</td>
       
        <td>🪒</td>
       
        <td>🧴</td>
       
        <td>🧷</td>
       
        <td>🧹</td>
       
        <td>🧺</td>
       </tr><tr> 
        <td>🧻</td>
       
        <td>🪣</td>
       
        <td>🧼</td>
       
        <td>🪥</td>
       
        <td>🧽</td>
       
        <td>🧯</td>
       
        <td>🛒</td>
       
        <td>🚬</td>
       </tr><tr> 
        <td>⚰️</td>
       
        <td>🪦</td>
       
        <td>⚱️</td>
       
        <td>🗿</td>
       
        <td>🪧</td>
       
        <td>🏧</td>
       
        <td>🚮</td>
       
        <td>🚰</td>
       </tr><tr> 
        <td>♿</td>
       
        <td>🚹</td>
       
        <td>🚺</td>
       
        <td>🚻</td>
       
        <td>🚼</td>
       
        <td>🚾</td>
       
        <td>🛂</td>
       
        <td>🛃</td>
       </tr><tr> 
        <td>🛄</td>
       
        <td>🛅</td>
       
        <td>⚠️</td>
       
        <td>🚸</td>
       
        <td>⛔</td>
       
        <td>🚫</td>
       
        <td>🚳</td>
       
        <td>🚭</td>
       </tr><tr> 
        <td>🚯</td>
       
        <td>🚱</td>
       
        <td>🚷</td>
       
        <td>📵</td>
       
        <td>🔞</td>
       
        <td>☢️</td>
       
        <td>☣️</td>
       
        <td>⬆️</td>
       </tr><tr> 
        <td>↗️</td>
       
        <td>➡️</td>
       
        <td>↘️</td>
       
        <td>⬇️</td>
       
        <td>↙️</td>
       
        <td>⬅️</td>
       
        <td>↖️</td>
       
        <td>↕️</td>
       </tr><tr> 
        <td>↔️</td>
       
        <td>↩️</td>
       
        <td>↪️</td>
       
        <td>⤴️</td>
       
        <td>⤵️</td>
       
        <td>🔃</td>
       
        <td>🔄</td>
       
        <td>🔙</td>
       </tr><tr> 
        <td>🔚</td>
       
        <td>🔛</td>
       
        <td>🔜</td>
       
        <td>🔝</td>
       
        <td>🛐</td>
       
        <td>⚛️</td>
       
        <td>🕉️</td>
       
        <td>✡️</td>
       </tr><tr> 
        <td>☸️</td>
       
        <td>☯️</td>
       
        <td>✝️</td>
       
        <td>☦️</td>
       
        <td>☪️</td>
       
        <td>☮️</td>
       
        <td>🕎</td>
       
        <td>🔯</td>
       </tr><tr> 
        <td>♈</td>
       
        <td>♉</td>
       
        <td>♊</td>
       
        <td>♋</td>
       
        <td>♌</td>
       
        <td>♍</td>
       
        <td>♎</td>
       
        <td>♏</td>
       </tr><tr> 
        <td>♐</td>
       
        <td>♑</td>
       
        <td>♒</td>
       
        <td>♓</td>
       
        <td>⛎</td>
       
        <td>🔀</td>
       
        <td>🔁</td>
       
        <td>🔂</td>
       </tr><tr> 
        <td>▶️</td>
       
        <td>⏩</td>
       
        <td>⏭️</td>
       
        <td>⏯️</td>
       
        <td>◀️</td>
       
        <td>⏪</td>
       
        <td>⏮️</td>
       
        <td>🔼</td>
       </tr><tr> 
        <td>⏫</td>
       
        <td>🔽</td>
       
        <td>⏬</td>
       
        <td>⏸️</td>
       
        <td>⏹️</td>
       
        <td>⏺️</td>
       
        <td>⏏️</td>
       
        <td>🎦</td>
       </tr><tr> 
        <td>🔅</td>
       
        <td>🔆</td>
       
        <td>📶</td>
       
        <td>📳</td>
       
        <td>📴</td>
       
        <td>♀️</td>
       
        <td>♂️</td>
       
        <td>⚧️</td>
       </tr><tr> 
        <td>✖️</td>
       
        <td>➕</td>
       
        <td>➖</td>
       
        <td>➗</td>
       
        <td>♾️</td>
       
        <td>‼️</td>
       
        <td>⁉️</td>
       
        <td>❓</td>
       </tr><tr> 
        <td>❔</td>
       
        <td>❕</td>
       
        <td>❗</td>
       
        <td>❗</td>
       
        <td>〰️</td>
       
        <td>💱</td>
       
        <td>💲</td>
       
        <td>⚕️</td>
       </tr><tr> 
        <td>♻️</td>
       
        <td>⚜️</td>
       
        <td>🔱</td>
       
        <td>📛</td>
       
        <td>🔰</td>
       
        <td>⭕</td>
       
        <td>✅</td>
       
        <td>☑️</td>
       </tr><tr> 
        <td>✔️</td>
       
        <td>❌</td>
       
        <td>❎</td>
       
        <td>➰</td>
       
        <td>➿</td>
       
        <td>〽️</td>
       
        <td>✳️</td>
       
        <td>✴️</td>
       </tr><tr> 
        <td>❇️</td>
       
        <td>©️</td>
       
        <td>®️</td>
       
        <td>™️</td>
       
        <td>#️⃣</td>
       
        <td>*️⃣</td>
       
        <td>0️⃣</td>
       
        <td>1️⃣</td>
       </tr><tr> 
        <td>2️⃣</td>
       
        <td>3️⃣</td>
       
        <td>4️⃣</td>
       
        <td>5️⃣</td>
       
        <td>6️⃣</td>
       
        <td>7️⃣</td>
       
        <td>8️⃣</td>
       
        <td>9️⃣</td>
       </tr><tr> 
        <td>🔟</td>
       
        <td>🔠</td>
       
        <td>🔡</td>
       
        <td>🔣</td>
       
        <td>🔤</td>
       
        <td>🅰️</td>
       
        <td>🆎</td>
       
        <td>🅱️</td>
       </tr><tr> 
        <td>🆑</td>
       
        <td>🆒</td>
       
        <td>🆓</td>
       
        <td>ℹ️</td>
       
        <td>🆔</td>
       
        <td>Ⓜ️</td>
       
        <td>🆕</td>
       
        <td>🆖</td>
       </tr><tr> 
        <td>🅾️</td>
       
        <td>🆗</td>
       
        <td>🅿️</td>
       
        <td>🆘</td>
       
        <td>🆙</td>
       
        <td>🆚</td>
       
        <td>🈁</td>
       
        <td>🈂️</td>
       </tr><tr> 
        <td>🉐</td>
       
        <td>🉑</td>
       
        <td>㊗️</td>
       
        <td>㊙️</td>
       
        <td>🈵</td>
       
        <td>🔴</td>
       
        <td>🟠</td>
       
        <td>🟡</td>
       </tr><tr> 
        <td>🟢</td>
       
        <td>🔵</td>
       
        <td>🟣</td>
       
        <td>🟤</td>
       
        <td>⚫</td>
       
        <td>⚪</td>
       
        <td>🟥</td>
       
        <td>🟧</td>
       </tr><tr> 
        <td>🟨</td>
       
        <td>🟩</td>
       
        <td>🟦</td>
       
        <td>🟪</td>
       
        <td>🟫</td>
       
        <td>⬛</td>
       
        <td>⬜</td>
       
        <td>◼️</td>
       </tr><tr> 
        <td>◻️</td>
       
        <td>◾</td>
       
        <td>◽</td>
       
        <td>▪️</td>
       
        <td>▫️</td>
       
        <td>🔶</td>
       
        <td>🔷</td>
       
        <td>🔸</td>
       </tr><tr> 
        <td>🔹</td>
       
        <td>🔺</td>
       
        <td>🔻</td>
       
        <td>💠</td>
       
        <td>🔘</td>
       
        <td>🔳</td>
       
        <td>🔲</td>
       
        <td>🏁</td>
       </tr><tr> 
        <td>🚩</td>
       
        <td>🎌</td>
       
        <td>🏴</td>
       
        <td>🏳️</td>
       
        <td>🏳️‍🌈</td>
       
        <td>🏳️‍⚧️</td>
       
        <td>🏴‍☠️</td>
       
        <td>🏴󠁧󠁢󠁥󠁮󠁧󠁿</td>
       </tr><tr> 
        <td>🏴󠁧󠁢󠁳󠁣󠁴󠁿</td>
       
        <td>🏴󠁧󠁢󠁷󠁬󠁳󠁿</td>
       </tr>
        </table>

</body>
</html>
	`;
}

export function deactivate() { }
