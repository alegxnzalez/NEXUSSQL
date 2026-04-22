// AUDIT_EVENT_DETAILS.js

window.AUDIT_EVENT_DETAILS = {
  "tables": {
    "AUDIT_EVENT_DETAILS": {
      "description": "Detailed previous/current information for an audit event. This allows before/after details to be longer than 2000 characters. E.g., an agent modification can be viewed as the difference between the full agent.",
      "columns": {
        "AUDIT_EVENT_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The Audit Event ID."
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": false,
          "info": "A key (from 1-4) based upon the insert_date which helps purge data periodically."
},
        "PREVIOUS_CLOB": {
          "type": "CLOB",
          "nullable": true,
          "info": "The previous details for the event."
},
        "NEW_CLOB": {
          "type": "CLOB",
          "nullable": true,
          "info": "The current details for the event."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "ROW_PROTECT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "R"
          ]
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