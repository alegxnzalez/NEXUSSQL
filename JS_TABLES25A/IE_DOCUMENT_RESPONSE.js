// IE_DOCUMENT_RESPONSE.js

window.IE_DOCUMENT_RESPONSE = {
  "tables": {
    "IE_DOCUMENT_RESPONSE": {
      "columns": {
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
          "info": "Date and time of the most recent data update. "
        },
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The transaction identifier for the shipping document filing data of the tracking event. "
        },
        "RESPONSE_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The response sequence number primary key for multiple document filing response tracking events. "
        },
        "ELEMENT_REF_QUALIFIER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The filing element reference qualifier for the tracking event. "
        },
        "ELEMENT_REF_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The filing element value for the qualifier defined. "
        },
        "RESPONSE_CODE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "The response code for this filing response tracking event. "
        },
        "RESPONSE_SEVERITY": {
          "type": "VARCHAR2(15)",
          "nullable": true,
          "info": "The response severity indicator for this tracking event. "
        },
        "RESPONSE_TEXT": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "The response text for this response filing tracking event."
        }
      },
      "fk_tables": []
    }
  }
};
