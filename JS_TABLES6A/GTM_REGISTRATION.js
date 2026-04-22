// GTM_REGISTRATION.js

window.GTM_REGISTRATION = {
  "tables": {
    "GTM_REGISTRATION": {
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
        "GTM_REGISTRATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GTM_REGISTRATION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "GTM_JURISDICTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_JURISDICTION"
        },
        "GTM_REGISTRATION_CATEGORY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGISTRATION_CATEGORY"
        },
        "GTM_REGISTRATION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGISTRATION_TYPE"
        },
        "GTM_REGISTRATION_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGISTRATION_CODE"
        },
        "REGISTERED_NAME": {
          "type": "VARCHAR2(200)",
          "nullable": true
        },
        "REGISTRATION_NUMBER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "REGISTERED_ADDRESS": {
          "type": "VARCHAR2(200)",
          "nullable": true
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "REQUESTED_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "APPROVAL_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "RENEWAL_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "GTM_PROD_CLASS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROD_CLASS_CODE"
        },
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true
        },
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
        },
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
        },
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
        },
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
        },
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_TEMPLATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "GTM_REGIME_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGIME"
        },
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 "
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 "
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 "
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 "
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 "
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 "
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 "
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 "
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 "
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 "
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 "
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 "
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 "
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 "
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 "
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 "
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 "
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 "
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 "
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 "
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date"
        }
      },
      "fk_tables": [
        "GTM_REGISTRATION_DATE",
        "GTM_REGISTRATION_QUANTITY",
        "GTM_REGISTRATION_REFNUM",
        "GTM_REGISTRATION_RELATED_REG",
        "GTM_REGISTRATION_REMARK",
        "GTM_REGISTRATION_STATUS",
        "GTM_REGISTRATION_VALUE",
        "GTM_REG_INVOLVED_PARTY",
        "GTM_REG_REL_COMMODITY",
        "GTM_REG_REL_ITEM",
        "GTM_REG_REL_USER_COMMODITY",
        "GTM_RELATED_REGISTRATION",
        "GTM_TR_CONTROL_SCREEN"
      ]
    }
  }
};
