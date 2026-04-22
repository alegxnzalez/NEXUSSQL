// LOAD_CONFIG_3D_PATTERN.js

window.LOAD_CONFIG_3D_PATTERN = {
  "tables": {
    "LOAD_CONFIG_3D_PATTERN": {
      "columns": {
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
        "LOAD_CONFIG_3D_PATTERN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "LOAD_CONFIG_3D_PATTERN_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "LOAD_CONFIG_3D_PATTERN_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "This represents the equipment group that this pattern has been built for. "
        },
        "PATTERN_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "ROW",
            "STACK",
            "FULL"
          ],
          "info": "ROW is used to fill a row in the container, STACK means an individual stack that can be used to fill out a row along with other stacks, FULL is used to fill the entire container, so only one pattern would be used for a container. "
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicate if the pattern is active and can be used as User-defined Pattern in 3D."
        }
      },
      "fk_tables": [
        "LOAD_CNFG_3D_PATTERN_D"
      ]
    }
  }
};
