// CONSOLIDATION_TYPE_PROF.js

window.CONSOLIDATION_TYPE_PROF = {
  "tables": {
    "CONSOLIDATION_TYPE_PROF": {
      "columns": {
        "CONSOLIDATION_TYPE_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "CONSOLIDATION_TYPE_PROF_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
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
        }
      },
      "fk_tables": [
        "CONSOLIDATION_TYPE_PROF_D",
        "NFRC_RULE",
        "SHIPPING_AGENT_CONTACT_PROFIT"
      ]
    }
  }
};
