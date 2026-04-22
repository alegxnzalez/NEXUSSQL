// MAIL_BLOCKED_MSG.js

window.MAIL_BLOCKED_MSG = {
  "tables": {
    "MAIL_BLOCKED_MSG": {
      "description": "A blocked message, persisted for future distribution.",
      "columns": {
        "MAIL_BLOCKED_MSG_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Unique sequence for PK"
},
        "MAIL_PRIORITY_LEVEL": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Priority level of the blocked message"
},
        "FROM_ADDRESS_SEQ": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Message from address, if specified"
},
        "TO_ADDRESS_SEQ": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Message To address, if only one To address was specified. Multiple To addresses are stored in the mail_blocked_msg_to table."
},
        "REPLY_TO_ADDRESS_SEQ": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Message Reply-To address, if only one Reply-o address was specified. Multiple Reply-To addresses are stored in the mail_blocked_msg_to table."
},
        "SUBJECT": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Message subject"
},
        "MSG": {
          "type": "CLOB",
          "nullable": true,
          "info": "Message content"
},
        "IS_PLAIN_TEXT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, the message is plain text. Otherwise, it is HTML."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "STATUS": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "QUOTA",
                    "SENDER",
                    "SUPPRESSION",
                    "FAILURE",
                    "SENT",
                    "UNSENT"
          ],
          "info": "Reason message was blocked from transport."
},
        "SENT_AT": {
          "type": "DATE",
          "nullable": true,
          "info": "Time the blocked message was generated."
},
        "USE_CASE": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "Use case of blocked message."
},
        "MAIL_CONTEXT": {
          "type": "VARCHAR2(300)",
          "nullable": true,
          "info": "Context of the blocked message."
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": false
}
      },
      "fk_tables": []
    }
  }
};