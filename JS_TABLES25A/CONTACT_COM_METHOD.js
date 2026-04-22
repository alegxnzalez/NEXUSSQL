// CONTACT_COM_METHOD.js

window.CONTACT_COM_METHOD = {
  "tables": {
    "CONTACT_COM_METHOD": {
      "columns": {
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "The contact GID. "
        },
        "COM_METHOD_RANK": {
          "type": "NUMBER(2)",
          "nullable": false,
          "key_value": true,
          "info": "A numeric value to rank the communication methods at the location. For example a location may have E-Mail, Fax and Phone as preferred communication methods in that rank. "
        },
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COM_METHOD",
          "info": "The communication method GID. "
        },
        "CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CALENDAR",
          "info": "The calendar GID. "
        },
        "EXPECTED_RESPONSE_TIME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "This value is used when the location represents  the service provider. It specifies the response time for a shipment tender. "
        },
        "EXPECTED_RESP_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure related to expected response time for the service providers tender offer. "
        },
        "EXPECTED_RESP_CNV_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Expected response time in the base unit of measure. "
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
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
        }
      },
      "fk_tables": []
    }
  }
};
