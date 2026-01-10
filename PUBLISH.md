# Hướng dẫn Publish Package lên GitHub Packages

## 🚀 Publish Package

### Bước 1: Tạo GitHub Personal Access Token

1. Truy cập: https://github.com/settings/tokens/new
2. Điền thông tin:
   - **Note**: `npm-publish-exercise-system`
   - **Expiration**: `No expiration` hoặc `90 days`
   - **Select scopes**:
     - ✅ `write:packages` - Upload packages
     - ✅ `read:packages` - Download packages
     - ✅ `delete:packages` - Delete packages (optional)
     - ✅ `repo` - Full control (nếu repo private)
3. Click **Generate token**
4. **⚠️ Copy token ngay** (dạng: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)

### Bước 2: Set GitHub Token

```bash
# Set token (thay YOUR_TOKEN bằng token vừa tạo)
export GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Lưu vào ~/.zshrc để dùng lâu dài
echo 'export GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' >> ~/.zshrc
source ~/.zshrc

# Verify token
echo $GITHUB_TOKEN
```

### Bước 3: Publish
Tạo orgs `english-test-free` trên github hoặc là member của orgs
```bash
# Chạy script publish
./publish.sh
```

Script sẽ tự động:
- ✅ Clean dist folder
- ✅ Build package với TypeScript
- ✅ Hiển thị thông tin package (name, version)
- ✅ Hỏi xác nhận
- ✅ Publish lên GitHub Packages

### Bước 4: Verify

Kiểm tra package đã được publish:
- https://github.com/orgs/english-test-free/packages
- Hoặc: https://github.com/english-test-free/english-test-free/packages

---

## 🔄 Update Version

### Semantic Versioning

- **Patch** (1.0.0 -> 1.0.1): Bug fixes, minor changes
- **Minor** (1.0.0 -> 1.1.0): New features, backward compatible
- **Major** (1.0.0 -> 2.0.0): Breaking changes

### Update và Publish

```bash
# 1. Update version
yarn version:patch  # hoặc version:minor, version:major

# 2. Publish version mới
./publish.sh
```

---

## 📝 Manual Publish (Alternative)

Nếu không dùng script:

```bash
# 1. Clean và build
yarn clean
yarn build

# 2. Tạo .npmrc.local với token
echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" > .npmrc.local
echo "@english-test-free:registry=https://npm.pkg.github.com" >> .npmrc.local

# 3. Publish
npm publish --userconfig .npmrc.local

# 4. Clean up
rm .npmrc.local
```

---

## 🐛 Troubleshooting

### Lỗi: "401 Unauthorized"

```bash
# Kiểm tra token
echo $GITHUB_TOKEN

# Set lại token
export GITHUB_TOKEN=ghp_your_token_here
```

### Lỗi: "403 Forbidden"

- Token không có quyền `write:packages`
- Tạo token mới với đủ quyền

### Lỗi: "Package already exists"

```bash
# Update version trước khi publish
yarn version:patch
```

### Lỗi: "You must be logged in"

```bash
# Set GITHUB_TOKEN
export GITHUB_TOKEN=ghp_your_token_here
```

---

## 📦 Package Scripts

```bash
# Build
yarn build

# Watch mode
yarn dev

# Clean
yarn clean

# Publish to NPM (public)
yarn publish:npm

# Publish to NPM (private)
yarn publish:npm-private

# Publish to GitHub Packages
yarn publish:github

# Interactive publish
yarn publish:interactive

# Version bump
yarn version:patch   # 1.0.0 -> 1.0.1
yarn version:minor   # 1.0.0 -> 1.1.0
yarn version:major   # 1.0.0 -> 2.0.0
```

---

## 🔐 Security Best Practices

1. ⚠️ **Không commit token vào Git**
2. ⚠️ **Luôn sử dụng environment variable**
3. ⚠️ **Rotate token định kỳ**
4. ⚠️ **Sử dụng token với quyền tối thiểu**
5. ⚠️ **Không share token với người khác**

---

## 📋 Checklist trước khi Publish

- [ ] Code đã được test kỹ
- [ ] Build thành công (`yarn build`)
- [ ] Version đã được update
- [ ] README đã được update
- [ ] GITHUB_TOKEN đã được set
- [ ] Đã review changes

---

## 📚 Tài liệu

- Package README: `README.md`
- Installation Guide: `/INSTALL_PACKAGE.md` (ở root project)

