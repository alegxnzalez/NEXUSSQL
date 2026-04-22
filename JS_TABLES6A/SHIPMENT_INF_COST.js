// SHIPMENT_INF_COST.js

window.SHIPMENT_INF_COST = {
  "tables": {
    "SHIPMENT_INF_COST": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT",
          "info": "The shipment GID. "
        },
        "SHIPMENT_INF_COST_SEQNO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The shipment informational cost sequence number. "
        },
        "COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The cost amount. "
        },
        "COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The cost currency GID. "
        },
        "COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The cost base amount. "
        },
        "DETAIL": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Generated text that details the calculation of the cost. "
        },
        "INF_COST_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "D",
            "O",
            "W",
            "U"
          ],
          "info": "Type of informational cost.  O = Original, D = Display "
        },
        "SHIPMENT_INF_COST_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPMENT_INF_COST_QUAL",
          "info": "The shipment informational cost qualifier GID for this cost. "
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
      "fk_tables": [
        "SHIPMENT_INF_COST_D",
        "SHIPMENT_INF_COST_REMARK"
      ]
    }
  }
};
