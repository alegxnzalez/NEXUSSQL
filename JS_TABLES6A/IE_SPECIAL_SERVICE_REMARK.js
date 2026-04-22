// IE_SPECIAL_SERVICE_REMARK.js

window.IE_SPECIAL_SERVICE_REMARK = {
  "tables": {
    "IE_SPECIAL_SERVICE_REMARK": {
      "columns": {
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The record number primary key identifier for the tracking event specified. "
        },
        "I_REC_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The transaction identifier for the shipment special services remark data of the tracking event. "
        },
        "REMARK_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "info": "A remark sequence number if entering multiple remarks for a shipment special service tracking event. "
        },
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REMARK_QUAL",
          "info": "The remark qualifier identifier. "
        },
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "The shipment remark text value for the qualifier defined. "
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The monthly range partition to manage purging status messages. "
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
