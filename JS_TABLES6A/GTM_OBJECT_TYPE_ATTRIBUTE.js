// GTM_OBJECT_TYPE_ATTRIBUTE.js

window.GTM_OBJECT_TYPE_ATTRIBUTE = {
  "tables": {
    "GTM_OBJECT_TYPE_ATTRIBUTE": {
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
        "GTM_OBJECT_TYPE_ATTRIBUTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Attributes of the selected object type. "
        },
        "GTM_OBJECT_TYPE_ATTRIBUTE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Xid "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description of the Attribute. "
        },
        "CONDITION_UI_JAVA_CLASS": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "This java class is used to build the necessary UI for this object_type_attribute. "
        },
        "REF_QUALIFIER_QUERY_CLASS": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Query Class Name like gtm.server.query.transaction.GtmTransRefnumQualQuery. "
        },
        "GTM_OBJECT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_OBJECT_TYPE",
          "info": "Object type gid from gtm_object_type table."
        },
        "GTM_ATTRIBUTE": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "GTM_FORMULA_EXP_IDENTIFIER",
        "GTM_OBJECT_CONDITION_DETAIL"
      ]
    }
  }
};
