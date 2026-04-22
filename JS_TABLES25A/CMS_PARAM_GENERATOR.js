// CMS_PARAM_GENERATOR.js

window.CMS_PARAM_GENERATOR = {
  "tables": {
    "CMS_PARAM_GENERATOR": {
      "columns": {
        "CMS_PARAM_GEN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "CMS_PARAM_GEN_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "GEN_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "values": [
            "BN",
            "CONSTANT",
            "PLUGIN",
            "SQL"
          ],
          "info": "The type of generation to use for the parameter value. \"BN\" = Business Number Rule; \"CONSTANT\" = constant value; \"SQL\" = SQL statement returning a single value; \"JAVA\" = a Java plug-in "
        },
        "GEN_PLUGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "JAVA_PLUGIN",
          "info": "If gen_type=\"JAVA\", the java plugin that generates the parameter value. "
        },
        "GEN_BN_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BN_RULE",
          "info": "If gen_type=\"BN\", the business number rule that generates the parameter value. "
        },
        "GEN_SQL": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "If gen_type=\"SQL\", the SQL select statement that generates the parameter value. "
        },
        "GEN_CONSTANT": {
          "type": "VARCHAR2(500)",
          "nullable": true,
          "info": "If gen_type=\"CONSTANT\", the constant value of the parameter."
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
        "CMS_PARAM",
        "CONTENT_MANAGEMENT_SYSTEM",
        "DOCUMENT_DEF_CMS_PARAM"
      ]
    }
  }
};
