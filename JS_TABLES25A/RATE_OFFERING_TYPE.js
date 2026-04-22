// RATE_OFFERING_TYPE.js

window.RATE_OFFERING_TYPE = {
  "tables": {
    "RATE_OFFERING_TYPE": {
      "columns": {
        "RATE_OFFERING_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "RATE_OFFERING_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "RATE_OFFERING_TYPE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false
        },
        "GEOGRAPHY_BASE_TYPE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "L",
            "Z",
            "X",
            "N"
          ]
        },
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Release ID specifying the OTM version of the record."
        }
      },
      "fk_tables": [
        "RATE_ATTRIBUTE_JOIN",
        "RATE_COSTING_SEQUENCE",
        "RATE_OFFERING",
        "ROT_RATE_OPERAND_VISIBILITY"
      ]
    }
  }
};
