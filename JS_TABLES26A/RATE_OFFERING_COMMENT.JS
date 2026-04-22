// RATE_OFFERING_COMMENT.js

window.RATE_OFFERING_COMMENT = {
  "tables": {
    "RATE_OFFERING_COMMENT": {
      "description": "Comments on a contract.  One record can be entered per contract per day.",
      "columns": {
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_OFFERING",
          "info": "The GID for the rate offering."
},
        "COMMENT_DATE": {
          "type": "DATE",
          "nullable": false,
          "key_value": true,
          "info": "The date and time the comment was entered for the rate offering."
},
        "ENTERED_BY": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The user ID of the user entering the comment."
},
        "THE_COMMENT": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Comment text."
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