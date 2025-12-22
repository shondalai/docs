---
id: plugins
title: Plugin Configuration
sidebar_label: Plugins
sidebar_position: 6
---

# Plugin Configuration

Rewardify includes multiple plugins that integrate with different Joomla extensions. This guide covers all available plugins and how to configure them.

## Core Plugins

### User - Rewardify

**Purpose:** Awards points for user registration and login activities.

**Required:** Yes (for basic functionality)

**Events Handled:**
- User registration
- User login
- 7-day login streak detection

#### Configuration

1. Go to **System → Plugins**
2. Search for "User - Rewardify"
3. Click to open

**Settings:**

*Currently no configurable options - awards points based on Point Rules*

**Point Rules Triggered:**
- `com_users.register` - User registration
- `com_users.login` - Daily login
- `com_users.login.streak_7` - 7-day consecutive login

#### How It Works

**Registration:**
```
1. User registers on site
2. Plugin detects onUserAfterSave event
3. Checks for "com_users.register" rule
4. Awards points if rule is active
5. Creates point entry in database
```

**Login:**
```
1. User logs in
2. Plugin detects onUserAfterLogin event
3. Checks if user already earned today (rate limit = 1 day)
4. Awards points if not already earned today
5. Checks for login streak
```

**Login Streak:**
```
1. User logs in
2. Plugin checks last 14 login dates
3. Counts consecutive days from today backwards
4. If exactly 7 (or 14, 21...) consecutive days
5. Awards streak bonus points
6. Uses unique reference to prevent duplicates
```

#### Troubleshooting

**Points not awarded on registration:**
- Check rule `com_users.register` is published
- Verify plugin is enabled
- Check user's access level matches rule

**Login points not working:**
- Check rule `com_users.login` is published
- Verify rate limit allows daily awards
- Clear Joomla cache

**Streak bonus not working:**
- User must login exactly 7 consecutive days
- Check rule `com_users.login.streak_7` is published
- Review point history for duplicate prevention

---

### Content - Rewardify

**Purpose:** Awards points for article-related activities.

**Required:** No (only if you want article points)

**Events Handled:**
- Article creation
- Article reading
- Article deletion
- Article state changes

#### Configuration

1. Go to **System → Plugins**
2. Search for "Content - Rewardify"
3. Click to open

**Settings:**

*No configurable options - awards points based on Point Rules*

**Point Rules Triggered:**
- `com_content.article.create` - Create article
- `com_content.article.read` - View article
- `com_content.article.delete` - Delete article

#### How It Works

**Creating Article:**
```
1. User creates article via frontend form
2. Plugin detects onContentAfterSave event
3. Checks if article is new (isNew = true)
4. Awards points via "com_content.article.create" rule
```

**Reading Article:**
```
1. User views article
2. Plugin detects onContentPrepare event
3. Awards points via "com_content.article.read" rule
4. Can use rate limit to prevent repeated awards
```

**Deleting Article:**
```
1. Article is deleted
2. Plugin detects onContentBeforeDelete event
3. Deducts points via "com_content.article.delete" rule
4. Typically uses negative points (-5)
```

#### Best Practices

**Enable for blogs:**
- ✅ Create article points (encourage content)
- ❌ Read article points (can be abused)
- ✅ Delete article penalty (discourage deletion)

**Use rate limiting:**
- Read article: 1 day (once per article per day)
- Create article: No limit (earn for each article)

#### Troubleshooting

**Article points not awarded:**
- Check Point Rules are published
- Verify plugin is enabled
- Check if article is created from frontend (plugin targets frontend)
- Review access levels

**Points awarded multiple times:**
- Enable rate limiting on rules
- Set duplicate assignments = 1

---

### Privacy - Rewardify

**Purpose:** Provides GDPR compliance features for user data.

**Required:** Yes (for GDPR compliance)

**Features:**
- Export user point data
- Delete user point data on account removal
- Privacy policy integration

#### Configuration

1. Go to **System → Plugins**
2. Search for "Privacy - Rewardify"
3. Click to open

**Settings:**

*No configurable options - automatic privacy compliance*

#### How It Works

**Data Export:**
```
1. User requests data export via Privacy Component
2. Plugin includes all point-related data:
   - Total points
   - Point history
   - Rules triggered
   - Dates and references
```

**Data Deletion:**
```
1. User account is deleted
2. Plugin removes associated data:
   - Point entries
   - User point totals
   - Referral information
```

#### Compliance

This plugin ensures Rewardify complies with:
- **GDPR** (EU General Data Protection Regulation)
- **CCPA** (California Consumer Privacy Act)
- **Right to be forgotten**
- **Data portability**

---

## Integration Plugins

### Community Builder - Rewardify

**Purpose:** Awards points for Community Builder profile activities.

**Required:** Only if you use Community Builder

**Events Handled:**
- Profile updates
- Avatar uploads
- Profile completion
- User connections
- Wall posts

#### Configuration

1. Go to **System → Plugins**
2. Search for "Community Builder - Rewardify"  
3. Click to open
4. Enable the plugin

**Settings:**

Currently no plugin-specific settings. Configure point values in Point Rules.

**Point Rules Triggered:**
- `com_communitybuilder.profile.update` - Update profile
- `com_communitybuilder.connection.create` - New friend connection
- `com_communitybuilder.connection.delete` - Remove connection
- `com_communitybuilder.wall.post` - Post on wall
- `com_communitybuilder.wall.delete` - Delete wall post

#### How It Works

**Profile Update:**
```
1. User updates CB profile
2. Plugin detects onAfterUserUpdate event
3. Awards points (if rate limit allows)
4. Typically limited to once per week
```

**Making Connections:**
```
1. User sends connection request
2. Other user accepts
3. Plugin awards points to BOTH users
4. Uses unique reference to prevent duplicates
```

**Wall Posts:**
```
1. User posts on profile wall
2. Plugin detects onAfterUserWallPost event
3. Awards points
4. Can set rate limit if needed
```

#### Best Practices

**Recommended settings:**
- Profile update: 2 points, 7 day rate limit
- Avatar upload: 5 points, once only
- Connection: 3 points each, no limit
- Wall post: 2 points, no limit

---

### HikaShop - Rewardify

**Purpose:** Awards points for HikaShop e-commerce activities.

**Required:** Only if you use HikaShop

**Events Handled:**
- Product purchases
- Order completion
- Product reviews
- Cart actions

#### Configuration

1. Go to **System → Plugins**
2. Search for "HikaShop - Rewardify"
3. Click to open
4. Enable the plugin

**Point Rules Triggered:**
- `com_hikashop.order.create` - Complete order
- `com_hikashop.product.review` - Write review
- `com_hikashop.product.purchase` - Buy product

#### How It Works

**Order Completion:**
```
1. Customer completes order
2. Plugin detects order confirmation
3. Awards points based on order value or fixed amount
4. Points added to customer account
```

**Product Review:**
```
1. Customer writes product review
2. Plugin detects review submission
3. Awards review points
4. Can limit to one review per product
```

---

### HikaShop Payment - Rewardify

**Purpose:** Allows customers to pay with Rewardify points.

**Required:** Only if you want point-based payments

**Features:**
- Use points as payment method
- Convert points to currency
- Partial payment with points
- Point deduction on purchase

#### Configuration

1. Go to **System → Plugins**
2. Search for "HikaShop Payment - Rewardify"
3. Click to open
4. Configure settings:

**Point Conversion Rate:**
```
Example: 100 points = $1.00
Enter: 100 (points per currency unit)
```

**Minimum Points:**
```
Minimum points required to use this payment
Example: 50 points minimum
```

**Maximum Discount:**
```
Maximum percentage of order payable with points
Example: 50% (half with points, half with money)
```

#### How It Works

**Checkout Process:**
```
1. Customer adds items to cart
2. Proceeds to checkout
3. Selects "Pay with Points" payment method
4. System calculates points needed
5. Checks if customer has enough points
6. Deducts points on order confirmation
```

**Point Deduction:**
```
Order Total: $50
Point Rate: 100 points = $1
Points Needed: 5,000 points
Customer Has: 6,000 points
After Purchase: 1,000 points remaining
```

---

### Kunena - Rewardify

**Purpose:** Awards points for Kunena forum activities.

**Required:** Only if you use Kunena forum

**Events Handled:**
- Topic creation
- Post replies
- Best answer selection
- Post likes

#### Configuration

1. Go to **System → Plugins**
2. Search for "Kunena - Rewardify"
3. Click to open
4. Enable the plugin

**Point Rules Triggered:**
- `com_kunena.topic.create` - Create topic
- `com_kunena.post.create` - Reply to topic
- `com_kunena.answer.best` - Answer marked as best

#### Best Practices

**Forum engagement:**
- Create topic: 5 points
- Post reply: 2 points
- Best answer: 10 points
- Post delete: -5 points

---

### JomSocial - Rewardify

**Purpose:** Awards points for JomSocial social network activities.

**Required:** Only if you use JomSocial

Similar to Community Builder plugin, but for JomSocial events.

---

### EShop - Rewardify

**Purpose:** Awards points for EShop e-commerce activities.

**Required:** Only if you use EShop

Similar to HikaShop plugin, but for EShop events.

---

## Plugin Management

### Enabling Plugins

**Enable required plugins:**
1. System → Plugins
2. Filter by "rewardify"
3. Check Status column
4. Click status icon to enable

**Priority order:**
1. ✅ User - Rewardify (core)
2. ✅ Privacy - Rewardify (GDPR)
3. ✅ Content - Rewardify (if using articles)
4. ✅ Integration plugins (if using those extensions)

### Plugin Order

Plugins execute in order. For Rewardify, order usually doesn't matter, but you can adjust:

1. Go to System → Plugins
2. Filter by "rewardify"
3. Use drag handles to reorder
4. Save ordering

### Disabling Plugins

To temporarily stop awarding points:

1. Go to System → Plugins
2. Find the specific plugin
3. Click green checkmark to disable
4. Points will not be awarded until re-enabled

:::warning Important
Disabling a plugin doesn't remove existing points, only prevents new points from being awarded.
:::

## Creating Custom Plugin

For developers who want to integrate custom extensions:

### Plugin Structure

```php
namespace Joomla\Plugin\System\MyPlugin\Extension;

use Joomla\Event\SubscriberInterface;
use Rewardify\Component\Rewardify\Administrator\Points\UserPointsFactoryInterface;

final class MyPlugin extends CMSPlugin implements SubscriberInterface {
    
    public static function getSubscribedEvents(): array {
        return [
            'onMyCustomEvent' => 'awardPoints',
        ];
    }
    
    public function awardPoints($event): void {
        $component = $this->getApplication()->bootComponent('com_rewardify');
        
        if ($component instanceof UserPointsFactoryInterface) {
            $component->getUserPoints()->assign([
                'rule' => 'com_myextension.custom.action',
                'userid' => $userId,
                'ref' => $referenceId,
                'title' => 'Custom Action',
                'description' => 'User performed custom action',
            ]);
        }
    }
}
```

### See Also

- [Developer API Documentation](rewardify-points-system-api.md)
- [Custom Integration Guide](custom-integration.md)

## Troubleshooting All Plugins

### Plugin Not Working

**Universal checklist:**
1. ✅ Plugin is **enabled**
2. ✅ Plugin has correct **order**
3. ✅ Point rule is **published**
4. ✅ Point value is **not zero**
5. ✅ Access level is **correct**
6. ✅ Rate limit is **not blocking**
7. ✅ Cache is **cleared**

### Finding Which Plugin Triggered

Check point history:
1. Components → Rewardify → Points
2. Find the point entry
3. Look at **Rule Name** column
4. This tells you which plugin awarded it

### Testing Plugins

**Test each plugin:**
1. Enable plugin
2. Perform the action
3. Check user points immediately
4. Review point history

**Example test for User plugin:**
1. Create test user account
2. Check if registration points awarded
3. Login as test user
4. Check if login points awarded

## Best Practices

### 1. Enable Only What You Need

Don't enable all plugins:
- ✅ Enable plugins for extensions you use
- ❌ Don't enable HikaShop plugin if you don't have HikaShop

### 2. Configure Point Rules First

Before enabling plugins:
1. Set up point rules
2. Test point values
3. Configure rate limits
4. Then enable plugins

### 3. Test in Stages

Enable plugins gradually:
1. Start with User plugin
2. Test registration/login
3. Add Content plugin
4. Test article points
5. Add integration plugins one by one

### 4. Monitor Performance

Too many active plugins can affect performance:
- Monitor page load times
- Check database queries
- Optimize point rules
- Use caching appropriately

### 5. Document Custom Configuration

Keep notes on:
- Which plugins are enabled
- Custom point values
- Rate limit settings
- Access level decisions

---

**Next:** [Customization Guide →](customization.md)

