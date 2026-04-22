// GTM_PARTY_SCREENING_COMMENT.js

window.GTM_PARTY_SCREENING_COMMENT = {
  "tables": {
    "GTM_PARTY_SCREENING_COMMENT": {
      "columns": {
        "PARTY_COMMENT_SEQUENCE": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number for potential matches comment. "
        },
        "PARTY_SCREENING_SEQUENCE": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_PARTY_SCREENING",
          "info": "Sequence number for potential matches. "
        },
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_PARTY_SCREENING",
          "info": "The GID for the contact. "
        },
        "COMMENT_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Text related to comment. "
        },
        "COMMENT_BY": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "User entering the comment. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
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
