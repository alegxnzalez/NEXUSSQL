// LOGIC_PARAMETER.js

window.LOGIC_PARAMETER = {
  "tables": {
    "LOGIC_PARAMETER": {
      "columns": {
        "LOGIC_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOGIC_CONFIG"
        },
        "LOGIC_PARAM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOGIC_PARAMETER_QUALIFIER"
        },
        "LOGIC_SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOGIC_SCENARIO",
          "info": "Specifies the scenario where the parameter applies to. e.g., DIRECT/LINEHAUL/CROSSDOCK scenario in MULTISTOP config.  Use DEFAULT if there is no other scenario. "
        },
        "PARAM_VALUE": {
          "type": "VARCHAR2(255)",
          "nullable": false
        },
        "PARAM_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The UOM code such as LB, FT etc, depending on uom_type of the parameter qualifier."
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
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": []
    }
  }
};
