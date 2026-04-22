// CLAIM_NOTE.js

window.CLAIM_NOTE = {
  "tables": {
    "CLAIM_NOTE": {
      "description": "Holds notes that are entered by a user or by GC3 to record a history of claim activity",
      "columns": {
        "CLAIM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CLAIM",
          "info": "The GID of the claim to which this note is linked."
},
        "CLAIM_NOTE_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number to keep notes unique."
},
        "TIMESTAMP": {
          "type": "DATE",
          "nullable": false,
          "info": "Timestamp for the note."
},
        "NOTE": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "The note text."
},
        "IS_SYSTEM_GENERATED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if this note was added to the claim by the system."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
}
      },
      "fk_tables": []
    }
  }
};