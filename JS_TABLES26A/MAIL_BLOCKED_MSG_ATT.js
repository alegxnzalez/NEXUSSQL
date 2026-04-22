// MAIL_BLOCKED_MSG_ATT.js

window.MAIL_BLOCKED_MSG_ATT = {
  "tables": {
    "MAIL_BLOCKED_MSG_ATT": {
      "description": "Attachment for a blocked message",
      "columns": {
        "MAIL_BLOCKED_MSG_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Blocked message sequence ID"
},
        "MAIL_BLOCKED_MSG_ATT_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Attachment sequence ID"
},
        "CONTENT_TYPE": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "MIME content type"
},
        "FILE_NAME": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Upload file name"
},
        "CONTENT_LENGTH": {
          "type": "NUMBER",
          "nullable": true,
          "info": "MIME content-length"
},
        "CLOB_CONTENT": {
          "type": "CLOB",
          "nullable": true,
          "info": "CLOB content, if attachment is character based"
},
        "BLOB_CONTENT": {
          "type": "BLOB",
          "nullable": true,
          "info": "Blob content, if attachment is binary"
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
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": false
}
      },
      "fk_tables": []
    }
  }
};