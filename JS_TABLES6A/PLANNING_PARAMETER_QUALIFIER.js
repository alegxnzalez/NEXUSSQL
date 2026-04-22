// PLANNING_PARAMETER_QUALIFIER.js

window.PLANNING_PARAMETER_QUALIFIER = {
  "tables": {
    "PLANNING_PARAMETER_QUALIFIER": {
      "columns": {
        "PLANNING_PARAM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "PLANNING_PARAM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "PLANNING_PARAM_QUAL_DESC": {
          "type": "VARCHAR2(256)",
          "nullable": true
        },
        "DATA_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "S",
            "B",
            "I",
            "N",
            "D",
            "G",
            "U",
            "C",
            "P",
            "F",
            "L"
          ]
        },
        "TYPE": {
          "type": "VARCHAR2(255)",
          "nullable": true
        },
        "GID_QUERY_CLASS": {
          "type": "VARCHAR2(200)",
          "nullable": true
        },
        "PARAMETER_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "PARAMETER_GROUP"
        },
        "VALID_VALUE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VALID_VALUE_TYPE",
          "info": "This column refers to the VALID_VALUE_TYPE table where the valid values for the each Planning parameter are managed"
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
      "fk_tables": [
        "PLANNING_PARAMETER"
      ]
    }
  }
};
