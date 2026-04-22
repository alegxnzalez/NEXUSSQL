// RATE_LOAD_RR_D.js

window.RATE_LOAD_RR_D = {
  "tables": {
    "RATE_LOAD_RR_D": {
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
        "RATE_LOAD_RR_D_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "RATE_MGMT_RR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "Reference to rate geo and rate geo GID from the uploaded sheet."
},
        "OPERATIONAL_RR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "Parent rate geo GID of rate mgmt rr GID."
},
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_OFFERING",
          "info": "Rate offering GID for the uploaded rate geo GID."
},
        "RATE_LOAD_RO_D_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "foreign_key": "RATE_LOAD_RO_D",
          "info": "Reference to rate load ro d seq."
},
        "RATE_LOAD_SUMMARY_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "foreign_key": "RATE_LOAD_SUMMARY",
          "info": "Reference to rate load summary seq."
},
        "RATE_LOAD_WARNING_INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Set to 'Y' if the uploaded rate record has any warnings during the rate load process."
},
        "LAST_UPLOADED_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Captures the date and time at which the rate record is last uploaded."
},
        "LAST_APPROVAL_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Captures the date and time at which the approval action is last run on this rate record."
},
        "UPLOADED_BY": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Captures the user who last uploaded this rate record."
},
        "STATUS_CHANGED_BY": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Captures the user who last run the approval action on the rate record."
}
      },
      "fk_tables": [
        "RATE_LOAD_RR_D_STATUS",
        "RATE_LOAD_RR_D_WARNING"
]
    }
  }
};