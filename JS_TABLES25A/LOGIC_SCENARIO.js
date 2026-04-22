// LOGIC_SCENARIO.js

window.LOGIC_SCENARIO = {
  "tables": {
    "LOGIC_SCENARIO": {
      "columns": {
        "LOGIC_SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "LOGIC_SCENARIO_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "LOGIC_CONFIG_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOGIC_CONFIG_GROUP",
          "info": "If null, the scenario is available to all logic configuration groups. E.g., DEFAULT scenario. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": false,
          "info": "A concise description that can be displayed in scenario dropdown in logic configuration UI "
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
          "info": "Indicates the OTM Release version"
        }
      },
      "fk_tables": [
        "LEG_CONSOLIDATION_GROUP",
        "LOGIC_PARAMETER"
      ]
    }
  }
};
