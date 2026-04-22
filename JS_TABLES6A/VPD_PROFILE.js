// VPD_PROFILE.js

window.VPD_PROFILE = {
  "tables": {
    "VPD_PROFILE": {
      "columns": {
        "VPD_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "VPD_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "USE_DOMAIN_RULE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "USE_CROSS_DOMAIN_RULE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "USE_INSERT_USER_RULE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "USE_EXTERNAL_PREDICATE_RULE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "USE_SERVPROV_RULE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "VPD_POLICY_GROUP": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "VPD Policy group classifies VPD Profiles domain access requirements. Default VPD POLICY GROUP is READ_GRANTED_WRITE_GRANTED, Users associated with this policy group can read data in the domains for which they have received permission to read data,write data in the domains for which they have received permission to write data."
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
        "BI_ROLE",
        "EXTERNAL_PREDICATE",
        "USER_ROLE"
      ]
    }
  }
};
