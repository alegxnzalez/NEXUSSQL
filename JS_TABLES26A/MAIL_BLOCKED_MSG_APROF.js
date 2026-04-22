// MAIL_BLOCKED_MSG_APROF.js

window.MAIL_BLOCKED_MSG_APROF = {
  "tables": {
    "MAIL_BLOCKED_MSG_APROF": {
      "description": "Audit profile driving mail audit and saved mail.",
      "columns": {
        "MAIL_BLOCKED_MSG_SEQ": {
          "type": "NUMBER",
          "nullable": true,
          "key_value": true,
          "info": "Blocked Message ID"
},
        "MAIL_AUDIT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "MAIL_AUDIT_PROFILE",
          "info": "Mail Audit Profile ID."
},
        "IS_PERSIST": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "key_value": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, if the profile was used for persistence. Otherwise it was used for audit."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "PARTITION_KEY": {
          "type": "NUMBER",
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