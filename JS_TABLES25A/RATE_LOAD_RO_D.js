// RATE_LOAD_RO_D.js

window.RATE_LOAD_RO_D = {
  "tables": {
    "RATE_LOAD_RO_D": {
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
        "RATE_LOAD_RO_D_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "RATE_LOAD_SUMMARY_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "foreign_key": "RATE_LOAD_SUMMARY",
          "info": "Reference to rate load summary. "
        },
        "RATE_MGMT_RO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING",
          "info": "Reference to uploaded rate offering. "
        },
        "OPERATIONAL_RO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING",
          "info": "Parent rate offering GID of rate mgmt ro GID. "
        },
        "USER_ENTERED_RO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Rate offering Gid entered in the spreadsheet. Reference to rate load ro d seq. "
        },
        "RATE_LOAD_WARNING_INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Set to \"Y\" if the uploaded rate offering has any warnings during the rate load process. "
        },
        "LAST_UPLOADED_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Captures the date and time at which the rate offering is last uploaded. "
        },
        "LAST_APPROVAL_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Captures the date and time at which the approval action is last run on this rate offering. "
        },
        "UPLOADED_BY": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Captures the user who last uploaded this rate offering. "
        },
        "STATUS_CHANGED_BY": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Captures the user who last run the approval action on the rate offering."
        }
      },
      "fk_tables": [
        "RATE_LOAD_RO_D_STATUS",
        "RATE_LOAD_RO_D_WARNING",
        "RATE_LOAD_RR_D"
      ]
    }
  }
};
