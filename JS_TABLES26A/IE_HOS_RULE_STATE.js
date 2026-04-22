// IE_HOS_RULE_STATE.js

window.IE_HOS_RULE_STATE = {
  "tables": {
    "IE_HOS_RULE_STATE": {
      "columns": {
        "I_REC_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The record number primary key identifier for the tracking event specified."
},
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The transaction identifier for the hours of service data of the tracking event."
},
        "HOS_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "HOS_RULE",
          "info": "The hours of service rule GID for the given tracking event."
},
        "ACTIVITY_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The activity time associated with the hours of service reported for the tracking event."
},
        "ACTIVITY_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The activity time unit of measure code."
},
        "ACTIVITY_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The activity time in the base unit of measure, time zone."
},
        "RULE_BEGIN_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "The begin time defined for the hours of service rule."
},
        "ACTIVITY_TIME_REMAIN": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The activity time remaining against that hours of service."
},
        "ACTIVITY_TIME_REMAIN_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The activity time remaining unit of measure code."
},
        "ACTIVITY_TIME_REMAIN_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The activity time remaining in the base unit of measure."
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The monthly range partition to manage purging status messages."
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