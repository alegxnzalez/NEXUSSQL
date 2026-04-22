// SHIPMENT_INF_COST_REMARK.js

window.SHIPMENT_INF_COST_REMARK = {
  "tables": {
    "SHIPMENT_INF_COST_REMARK": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_INF_COST",
          "info": "The GID for the ship unit associated with the shipment. "
        },
        "SHIPMENT_INF_COST_SEQNO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_INF_COST",
          "info": "The shipment info cost number sequence. "
        },
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REMARK_QUAL",
          "info": "The remark qualifier identifier defining the remark code. "
        },
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "The text associated to the remark code. "
        },
        "REMARK_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The remark sequence number (key). "
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
