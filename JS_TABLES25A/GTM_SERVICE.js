// GTM_SERVICE.js

window.GTM_SERVICE = {
  "tables": {
    "GTM_SERVICE": {
      "columns": {
        "GTM_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GTM_SERVICE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "GTM_SERVICE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
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
        "SUPPORT_SERVICE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "This column stores flag that indicates whether the service can be exposed for adhoc service. "
        },
        "SUPPORT_POLICY": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "This column stores flag that indicates whether the service can be added to policy. "
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Indicates the OTM Release version"
        }
      },
      "fk_tables": [
        "GTM_AUDIT_CONTROL_SERVICE",
        "GTM_AUDIT_TRAIL",
        "GTM_COMPLIANCE_TEMPLATE_D",
        "GTM_SERVICE_PARAMETER",
        "GTM_SERVICE_PREF_D",
        "GTM_SERVICE_PREF_PARAM"
      ]
    }
  }
};
