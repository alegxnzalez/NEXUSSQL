// OBS_STATUS_HISTORY.js

window.OBS_STATUS_HISTORY = {
  "tables": {
    "OBS_STATUS_HISTORY": {
      "columns": {
        "ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OB_ORDER_BASE",
          "info": "The order base GID for the tracking event. "
        },
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The transaction identifier for the order base data of the tracking event. "
        },
        "REPORTING_GLUSER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The reporting application user if the tracking event was entered via the system's tracking event UI. "
        },
        "XML_DOC_STATUS": {
          "type": "CLOB",
          "nullable": true,
          "info": "The document status from a processed integration object sent in as a tracking event. "
        },
        "BS_CONTACT_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The contact name from the tracking event. "
        },
        "BS_CONTACT_FUNCTION_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The contact name function code from the tracking event. "
        },
        "EVENT_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The event date and time reported on the tracking event. "
        },
        "BS_STATUS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "The status code identified on the tracking event. "
        },
        "SERVPROV_ALIAS_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_ALIAS_QUAL",
          "info": "The service provider alias qualifier code, such as SCAC, from the entered tracking event. "
        },
        "SERVPROV_ALIAS_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The service provide alias value from the tracking event. "
        },
        "TIME_ZONE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The time zone for the tracking event time entered. "
        },
        "STATUS_LEVEL": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "A descriptor code for the status level of the tracking event. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "A description of the tracking event. "
        },
        "OB_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OB_REFNUM_QUAL",
          "info": "The order base reference number value associated with the order release qualifier that came on the tracking event. "
        },
        "OB_REFNUM_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The order base reference number qualifier identifier. "
        },
        "BS_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_REASON_CODE",
          "info": "The reason code from the tracking event that was matched to the order base. "
        },
        "BS_RESPONSIBLE_PARTY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_RESPONSIBLE_PARTY",
          "info": "The responsible party identifier of the source of the tracking event. "
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
