// SHIPMENT_COST_REF.js

window.SHIPMENT_COST_REF = {
  "tables": {
    "SHIPMENT_COST_REF": {
      "columns": {
        "SEQNO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "A system-generated unique sequence number. "
        },
        "SHIPMENT_COST_SEQNO": {
          "type": "NUMBER()",
          "nullable": false,
          "foreign_key": "SHIPMENT_COST",
          "info": "N/A "
        },
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SHIPMENT",
          "info": "The shipment GID. "
        },
        "COST_REFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "The cost reference GID. "
        },
        "SHIPMENT_COST_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SHIPMENT_COST_QUAL",
          "info": "A GID for the various cost qualifiers like: item, order base, order release, order release line, etc. "
        },
        "IS_PICKUP": {
          "type": "CHAR(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "True or false value to specify if the cost is a pickup cost. "
        },
        "IS_DROPOFF": {
          "type": "CHAR(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "True or false value to specify if the cost is a dropoff cost. "
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
