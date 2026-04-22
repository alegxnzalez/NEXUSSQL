// OPT_FEATURE.js

window.OPT_FEATURE = {
  "tables": {
    "OPT_FEATURE": {
      "columns": {
        "OPT_FEATURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Optional Feature ID "
        },
        "OPT_FEATURE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "SUMMARY_TRANSLATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "Label for feature summary "
        },
        "DESCRIPTION_TRANSLATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "Label for full feature description "
        },
        "IS_ENABLED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Y if the feature is enabled, N if not "
        },
        "LAST_CHANGE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date when the feature was last enabled or disabled "
        },
        "LAST_CHANGE_REASON": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Reason why the feature was last enabled or disabled "
        },
        "SUPPORT_OLD_BEHAVIOR_UNTIL": {
          "type": "VARCHAR2(40)",
          "nullable": true,
          "info": "OTM Release where feature will no longer be optional "
        },
        "PRECEDENCE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Data precedence relative to other optional features "
        },
        "OTM_VERSION": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "OTM Version of feature introduction "
        },
        "IS_PROMOTED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If set to 'Y', the optional feature is promoted. It will not appear in the Optional Feature finder and will automatically be opted in. "
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
          "info": "OTM Release (for record versioning)"
        }
      },
      "fk_tables": [
        "ACTION",
        "AGENT_ACTION",
        "OPT_FEATURE_DEPENDENCY",
        "OPT_FEATURE_PROPERTY",
        "OPT_FEATURE_URL"
      ]
    }
  }
};
