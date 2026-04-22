// ORDER_RELEASE_STATUS_HISTORY.js

window.ORDER_RELEASE_STATUS_HISTORY = {
  "tables": {
    "ORDER_RELEASE_STATUS_HISTORY": {
      "description": "New table for FDs enahancements to handle origin/destination specific events",
      "columns": {
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE",
          "info": "The order release GID for the tracking event."
},
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The transaction identifier for the order release data of the tracking event."
},
        "REPORTING_GLUSER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The service provider associated with generating the tracking event."
},
        "XML_DOC_STATUS": {
          "type": "CLOB",
          "nullable": true,
          "info": "The reporting application user if the tracking event was entered via the system's tracking event UI."
},
        "BS_CONTACT_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The reporting method that links into the communication methods defined for OTM."
},
        "BS_CONTACT_FUNCTION_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "This indicates the shipment stop number for a stop based event."
},
        "EVENT_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The location identifier of an location based event. This will be null for non-location based events."
},
        "BS_STATUS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "A Y/N indicator to display the status history."
},
        "TIME_ZONE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TIME_ZONE",
          "info": "The monthly range partition to manage purging status messages."
},
        "STATUS_LEVEL": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "A descriptor code for the status level of the tracking event."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "A description of the tracking event."
},
        "ORDER_RELEASE_REFNUM_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The order release reference number value associated with the order release qualifier that came on the tracking event."
},
        "ORDER_RELEASE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_RELEASE_REFNUM_QUAL",
          "info": "The order release reference number qualifier identifier."
},
        "BS_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_REASON_CODE",
          "info": "The reason code from the tracking event that was matched to the order releases."
},
        "BS_RESPONSIBLE_PARTY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_RESPONSIBLE_PARTY",
          "info": "The responsible party identifier of the source of the tracking event."
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