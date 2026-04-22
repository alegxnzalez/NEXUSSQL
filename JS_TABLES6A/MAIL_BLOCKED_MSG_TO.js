// MAIL_BLOCKED_MSG_TO.js

window.MAIL_BLOCKED_MSG_TO = {
  "tables": {
    "MAIL_BLOCKED_MSG_TO": {
      "columns": {
        "MAIL_BLOCKED_MSG_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "MAIL_BLOCKED_MSG",
          "info": "Blocked Message ID "
        },
        "TO_ADDRESS_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "MAIL_BLOCKED_ADDRESS",
          "info": "To address ID "
        },
        "IS_CC": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, the To party is a CC. Otherwise, it is a primary To party. "
        },
        "IS_REPLY_TO": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, the party is used as the reply-to for the message."
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
        }
      },
      "fk_tables": []
    }
  }
};
