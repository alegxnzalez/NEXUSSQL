// RATE_LOAD_SUMMARY.js

window.RATE_LOAD_SUMMARY = {
  "tables": {
    "RATE_LOAD_SUMMARY": {
      "columns": {
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
        "RATE_LOAD_SUMMARY_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "RATE_LOAD_DEFINITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_LOAD_DEFINITION",
          "info": "Reference to rate load definition."
},
        "RATE_LOAD_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_LOAD_GROUP",
          "info": "Reference to rate load group."
},
        "TOTAL_UPLOADED_RATE_OFFERINGS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Count of total rate offerings uploaded."
},
        "TOTAL_APPROVED_RATE_OFFERINGS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Count of total rate offerings approved."
},
        "TOTAL_UPLOADED_RATE_GEOS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Count of total rate records uploaded."
},
        "TOTAL_APPROVED_RATE_GEOS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Count of total rate records approved."
},
        "LAST_UPLOADED_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Last uploaded date."
},
        "LAST_APPROVAL_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Last approved date."
},
        "RATE_LOAD_WARNING_INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Set to 'Y' if any of the uploaded rate offering s/rate records has any warnings during the rate load process."
},
        "UPLOADED_BY": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Captures the user who uploaded last for this rate load summary."
},
        "STATUS_CHANGED_BY": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Captures the user who last run the approval related actions on this rate load summary"
},
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "this column will identifies the rows which will be purged"
}
      },
      "fk_tables": [
        "RATE_LOAD_HISTORY",
        "RATE_LOAD_RO_D",
        "RATE_LOAD_RR_D",
        "RATE_LOAD_SUMMARY_STATUS"
]
    }
  }
};