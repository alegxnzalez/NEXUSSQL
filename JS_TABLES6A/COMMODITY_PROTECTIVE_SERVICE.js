// COMMODITY_PROTECTIVE_SERVICE.js

window.COMMODITY_PROTECTIVE_SERVICE = {
  "tables": {
    "COMMODITY_PROTECTIVE_SERVICE": {
      "columns": {
        "COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COMMODITY",
          "info": "A unique identifier to define the commodities in the system. "
        },
        "PROT_SRV_SEQ_NO": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "info": "THE SEQUENCE NUMBER. "
        },
        "PROT_SRV_CODE": {
          "type": "VARCHAR2(9)",
          "nullable": true,
          "info": "THE PROTECTIVE SERVICE CODE. "
        },
        "PROT_SRV_RULE_CODE": {
          "type": "VARCHAR2(4)",
          "nullable": true,
          "info": "THE PROTECTIVE SERVICE RULE CODE. "
        },
        "PROT_SRV_TEMP": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "THE PROTECTIVE SERVICE OPTIMAL TEMPERATURE. "
        },
        "PROT_SRV_TEMP_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "THE PROTECTIVE SERVICE TEMPERATURE UNIT OF MEASURE CODE. "
        },
        "PROT_SRV_TEMP_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The protective service optimal temperature in base units."
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
        }
      },
      "fk_tables": []
    }
  }
};
